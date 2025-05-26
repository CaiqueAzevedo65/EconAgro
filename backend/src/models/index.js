const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

// Importar modelos
const Product = require('./Product');
const Category = require('./category');

// Inicializar modelos
const ProductModel = Product(sequelize);
const CategoryModel = Category(sequelize);

// Configurar associações
if (ProductModel.associate) {
  ProductModel.associate({ Category: CategoryModel });
}

if (CategoryModel.associate) {
  CategoryModel.associate({ Product: ProductModel });
}

// Adicionar modelos ao objeto db
db.Product = ProductModel;
db.Category = CategoryModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exportar modelos e instância do Sequelize
module.exports = db;