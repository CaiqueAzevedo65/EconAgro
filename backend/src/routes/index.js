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
router.get('/products', productController.getAll);
router.post('/products', productController.create);
router.get('/products/:id', validateId, productController.getById);
router.put('/products/:id', validateId, productController.update);
router.delete('/products/:id', validateId, productController.delete);

// Rota de saúde da API
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'API está funcionando' });
});

module.exports = router;