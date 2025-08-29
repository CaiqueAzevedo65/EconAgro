const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { validate } = require('../middlewares/validator');
const { param } = require('express-validator');

// Validador de ObjectId para rotas que recebem :id
const idValidator = [param('id').isMongoId().withMessage('ID inválido'), validate];

// Rotas de categorias
router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.get('/:id', idValidator, categoryController.getById);
router.put('/:id', idValidator, categoryController.update);
router.delete('/:id', idValidator, categoryController.delete);

module.exports = router;
