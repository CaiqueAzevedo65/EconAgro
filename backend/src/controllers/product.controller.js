const { StatusCodes } = require('http-status-codes');
const { Product, Category } = require('../models');
const { 
  NotFoundError, 
  BadRequestError,
  ValidationError 
} = require('../utils/errors');
const { deleteFromCloudinary } = require('../config/cloudinary');

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
      const filter = {};
      if (category) {
        filter.category = category;
      }

      const products = await Product.find(filter).sort({ createdAt: -1 });

      const data = products.map((p) => ({
        id: p._id.toString(),
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        category: p.category?.toString ? p.category.toString() : p.category,
        img: p.image || null,
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      }));

      res.status(StatusCodes.OK).json(data);
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
      const p = await Product.findById(id);

      if (!p) {
        throw new NotFoundError('Produto não encontrado');
      }

      const data = {
        id: p._id.toString(),
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        category: p.category?.toString ? p.category.toString() : p.category,
        img: p.image || null,
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      };

      res.status(StatusCodes.OK).json(data);
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
      const { name, description, price, quantity, category } = req.body;
      
      // Imagem do upload (Cloudinary)
      const imageUrl = req.file ? req.file.path : null;

      const doc = new Product({
        name,
        description,
        price,
        quantity,
        category,
        image: imageUrl,
      });

      await doc.save();

      const data = {
        id: doc._id.toString(),
        name: doc.name,
        description: doc.description,
        price: doc.price,
        quantity: doc.quantity,
        category: doc.category?.toString ? doc.category.toString() : doc.category,
        img: doc.image || null,
        active: doc.active,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      };

      res.status(StatusCodes.CREATED).json({ success: true, data });
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
      const updateData = { ...req.body };

      // Buscar produto atual para verificar imagem existente
      const currentProduct = await Product.findById(id);
      if (!currentProduct) {
        throw new NotFoundError('Produto não encontrado');
      }

      // Se há uma nova imagem sendo enviada
      if (req.file) {
        // Deletar imagem antiga do Cloudinary (se existir)
        if (currentProduct.image) {
          try {
            // Extrair public_id do URL do Cloudinary
            const publicId = currentProduct.image.split('/').pop().split('.')[0];
            const fullPublicId = `econagro/products/${publicId}`;
            await deleteFromCloudinary(fullPublicId);
          } catch (deleteError) {
            console.warn('Erro ao deletar imagem antiga:', deleteError.message);
          }
        }
        updateData.image = req.file.path;
      }

      const p = await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

      const data = {
        id: p._id.toString(),
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        category: p.category?.toString ? p.category.toString() : p.category,
        img: p.image || null,
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      };

      res.status(StatusCodes.OK).json({ success: true, data });
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
      const product = await Product.findById(id);

      if (!product) {
        throw new NotFoundError('Produto não encontrado');
      }

      // Deletar imagem do Cloudinary (se existir)
      if (product.image) {
        try {
          // Extrair public_id do URL do Cloudinary
          const publicId = product.image.split('/').pop().split('.')[0];
          const fullPublicId = `econagro/products/${publicId}`;
          await deleteFromCloudinary(fullPublicId);
        } catch (deleteError) {
          console.warn('Erro ao deletar imagem do Cloudinary:', deleteError.message);
        }
      }

      await Product.findByIdAndDelete(id);
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
  /**
   * @swagger
   * /products/search:
   *   get:
   *     summary: Busca produtos por termo
   *     tags: [Produtos]
   *     parameters:
   *       - in: query
   *         name: q
   *         required: true
   *         schema:
   *           type: string
   *         description: Termo de busca
   *     responses:
   *       200:
   *         description: Lista de produtos encontrados
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Product'
   */
  async search(req, res, next) {
    try {
      const { q } = req.query;
      
      if (!q || q.trim() === '') {
        return res.status(StatusCodes.OK).json([]);
      }

      const searchTerm = q.trim();
      
      // Busca por nome ou descrição usando regex case-insensitive
      const products = await Product.find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } }
        ],
        active: true // Só produtos ativos
      }).sort({ createdAt: -1 });

      const data = products.map((p) => ({
        id: p._id.toString(),
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        category: p.category?.toString ? p.category.toString() : p.category,
        img: p.image || null,
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      }));

      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getByCategory(req, res, next) {
    try {
      const { categoryName } = req.params;

      const category = await Category.findOne({ name: new RegExp(`^${categoryName}$`, 'i') });

      if (!category) {
        // Categoria inexistente -> lista vazia
        return res.status(StatusCodes.OK).json([]);
      }

      const products = await Product.find({ category: category._id }).sort({ createdAt: -1 });

      const data = products.map((p) => ({
        id: p._id.toString(),
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        category: p.category?.toString ? p.category.toString() : p.category,
        img: p.image || null,
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      }));

      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
