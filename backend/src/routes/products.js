const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Listar produtos por categoria
router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { category: req.params.category }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos por categoria' });
  }
});

// Rota para listar todos os produtos (incluindo detalhes)
router.get('/all', async (req, res) => {
  try {
    const products = await Product.findAll();
    console.log('Produtos no banco de dados:', JSON.stringify(products, null, 2));
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Obter um produto por ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o produto' });
  }
});

// Adicionar novo produto
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
});

module.exports = router;