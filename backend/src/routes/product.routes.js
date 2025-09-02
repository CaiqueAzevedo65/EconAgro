const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { validate } = require('../middlewares/validator');
const { productValidationRules } = require('../validators/product.validator');
const { uploadSingle, handleUploadError } = require('../middlewares/upload');

// Validadores provenientes de validators/product.validator.js

// Rotas de produtos
router.get('/', productController.getAll);
router.get('/search', productController.search);
router.post('/', uploadSingle, handleUploadError, productValidationRules.create, validate, productController.create);
router.get('/category/:categoryName', productController.getByCategory);
router.get('/:id', productValidationRules.getById, validate, productController.getById);
router.put('/:id', uploadSingle, handleUploadError, productValidationRules.update, validate, productController.update);
router.delete('/:id', productValidationRules.getById, validate, productController.delete);

module.exports = router;
