const { StatusCodes } = require('http-status-codes');
const { Product, Category } = require('../models');
const { 
  NotFoundError, 
  BadRequestError,
  ValidationError 
} = require('../utils/errors');

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos
 */
class ProductController {
  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Lista todos os produtos
   *     tags: [Produtos]
   *     parameters:
   *       - in: query
   *         name: category
   *         schema:
   *           type: string
   *         description: Categoria do produto
   *     responses:
   *       200:
   *         description: Lista de produtos
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
   *                     $ref: '#/components/schemas/Product'
   */
  async getAll(req, res, next) {
    try {
      const { category } = req.query;
      const where = {};
      
      if (category) {
        where.category = category;
      }
      
      const products = await Product.findAll({ 
        where,
        include: [{
          model: Category,
          as: 'category',
          required: !!category
        }]
      });
      
      // Mapeia os produtos para o formato esperado pelo frontend
      const formattedProducts = products.map(product => ({
        ...product.get({ plain: true }),
        img: product.imageUrl // Mapeia imageUrl para img
      }));
      
      res.status(StatusCodes.OK).json(formattedProducts);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /products/{id}:
   *   get:
   *     summary: Obtém um produto pelo ID
   *     tags: [Produtos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID do produto
   *     responses:
   *       200:
   *         description: Dados do produto
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       404:
   *         description: Produto não encontrado
   */
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [{
          model: Category,
          as: 'category'
        }]
      });
      
      if (!product) {
        throw new NotFoundError('Produto não encontrado');
      }

      // Formata o produto para o formato esperado pelo frontend
      const formattedProduct = {
        ...product.get({ plain: true }),
        img: product.imageUrl // Mapeia imageUrl para img
      };

      res.status(StatusCodes.OK).json(formattedProduct);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /products:
   *   post:
   *     summary: Cria um novo produto
   *     tags: [Produtos]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       201:
   *         description: Produto criado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       422:
   *         description: Erro de validação
   */
  async create(req, res, next) {
    try {
      const product = await Product.create(req.body);
      res.status(StatusCodes.CREATED).json({
        success: true,
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /products/{id}:
   *   put:
   *     summary: Atualiza um produto existente
   *     tags: [Produtos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID do produto
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Produto atualizado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       404:
   *         description: Produto não encontrado
   *       422:
   *         description: Erro de validação
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const [updated] = await Product.update(req.body, {
        where: { id }
      });

      if (!updated) {
        throw new NotFoundError('Produto não encontrado');
      }

      const updatedProduct = await Product.findByPk(id);
      res.status(StatusCodes.OK).json({
        success: true,
        data: updatedProduct
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /products/{id}:
   *   delete:
   *     summary: Remove um produto
   *     tags: [Produtos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID do produto
   *     responses:
   *       204:
   *         description: Produto removido com sucesso
   *       404:
   *         description: Produto não encontrado
   */
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      
      const deleted = await Product.destroy({
        where: { id }
      });

      if (!deleted) {
        throw new NotFoundError('Produto não encontrado');
      }

      res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /products/category/{categoryName}:
   *   get:
   *     summary: Busca produtos por nome da categoria
   *     tags: [Produtos]
   *     parameters:
   *       - in: path
   *         name: categoryName
   *         required: true
   *         schema:
   *           type: string
   *         description: Nome da categoria
   *     responses:
   *       200:
   *         description: Lista de produtos da categoria
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
   *                     $ref: '#/components/schemas/Product'
   */
  async getByCategory(req, res, next) {
    try {
      const { categoryName } = req.params;
      
      const products = await Product.findAll({
        include: [{
          model: Category,
          as: 'category',
          where: { name: categoryName },
          required: true
        }]
      });
      
      // Mapeia os produtos para o formato esperado pelo frontend
      const formattedProducts = products.map(product => ({
        ...product.get({ plain: true }),
        img: product.imageUrl // Mapeia imageUrl para img
      }));
      
      res.status(StatusCodes.OK).json(formattedProducts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
