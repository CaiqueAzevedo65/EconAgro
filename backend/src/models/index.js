const mongoose = require('mongoose');
const connectDB = require('../config/mongodb');

// Conectar ao banco de dados
connectDB();

// Exportar modelos
module.exports = {
  Category: require('./category'),
  Product: require('./Product')
};