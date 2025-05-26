const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
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

// Rotas de categorias
router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.get('/:id', validateId, categoryController.getById);
router.put('/:id', validateId, categoryController.update);
router.delete('/:id', validateId, categoryController.delete);

module.exports = router;
