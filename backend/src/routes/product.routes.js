const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { validate } = require('../middlewares/validator');

// Middleware para validação de ID
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      message: 'ID inválido'
    });
  }
  next();
};

// Rotas de produtos
router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/category/:categoryName', productController.getByCategory);
router.get('/:id', validateId, productController.getById);
router.put('/:id', validateId, productController.update);
router.delete('/:id', validateId, productController.delete);

module.exports = router;
