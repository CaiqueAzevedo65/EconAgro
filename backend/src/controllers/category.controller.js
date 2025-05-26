const { StatusCodes } = require('http-status-codes');
const { Category } = require('../models');
const { 
  NotFoundError, 
  BadRequestError,
  ValidationError 
} = require('../utils/errors');

class CategoryController {
  /**
   * @swagger
   * /categories:
   *   get:
   *     summary: Lista todas as categorias
   *     tags: [Categorias]
   *     responses:
   *       200:
   *         description: Lista de categorias
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 count:
   *                   type: integer
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Category'
   */
  async getAll(req, res, next) {
    try {
      const categories = await Category.findAll({
        order: [['name', 'ASC']]
      });
      
      return res.status(StatusCodes.OK).json({
        success: true,
        count: categories.length,
        data: categories
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /categories/{id}:
   *   get:
   *     summary: Obtém uma categoria por ID
   *     tags: [Categorias]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID da categoria
   *     responses:
   *       200:
   *         description: Categoria encontrada
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       404:
   *         description: Categoria não encontrada
   */
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id, {
        include: ['products']
      });

      if (!category) {
        throw new NotFoundError('Categoria não encontrada');
      }

      return res.status(StatusCodes.OK).json({
        success: true,
        data: category
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /categories:
   *   post:
   *     summary: Cria uma nova categoria
   *     tags: [Categorias]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CategoryInput'
   *     responses:
   *       201:
   *         description: Categoria criada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       400:
   *         description: Dados inválidos
   */
  async create(req, res, next) {
    try {
      const { name } = req.body;

      if (!name || name.trim().length < 2) {
        throw new BadRequestError('O nome da categoria é obrigatório e deve ter pelo menos 2 caracteres');
      }

      const category = await Category.create({ name });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        data: category
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(new ValidationError('Já existe uma categoria com este nome'));
      } else {
        next(error);
      }
    }
  }

  /**
   * @swagger
   * /categories/{id}:
   *   put:
   *     summary: Atualiza uma categoria existente
   *     tags: [Categorias]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID da categoria
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CategoryInput'
   *     responses:
   *       200:
   *         description: Categoria atualizada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Categoria não encontrada
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const category = await Category.findByPk(id);
      if (!category) {
        throw new NotFoundError('Categoria não encontrada');
      }

      if (!name || name.trim().length < 2) {
        throw new BadRequestError('O nome da categoria é obrigatório e deve ter pelo menos 2 caracteres');
      }

      category.name = name;
      await category.save();

      return res.status(StatusCodes.OK).json({
        success: true,
        data: category
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(new ValidationError('Já existe uma categoria com este nome'));
      } else {
        next(error);
      }
    }
  }

  /**
   * @swagger
   * /categories/{id}:
   *   delete:
   *     summary: Remove uma categoria
   *     tags: [Categorias]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID da categoria
   *     responses:
   *       204:
   *         description: Categoria removida com sucesso
   *       400:
   *         description: Não é possível remover categorias com produtos associados
   *       404:
   *         description: Categoria não encontrada
   */
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      
      // Verificar se a categoria existe
      const category = await Category.findByPk(id, {
        include: ['products']
      });

      if (!category) {
        throw new NotFoundError('Categoria não encontrada');
      }

      // Verificar se existem produtos associados
      if (category.products && category.products.length > 0) {
        throw new BadRequestError('Não é possível remover categorias com produtos associados');
      }

      await category.destroy();

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
