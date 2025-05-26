const { Sequelize } = require('sequelize');
const config = require('../src/config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false
  }
);

async function checkData() {
  try {
    console.log('Verificando categorias:');
    const [categories] = await sequelize.query('SELECT * FROM categories');
    console.log('Categorias:', JSON.stringify(categories, null, 2));

    console.log('\nVerificando produtos:');
    const [products] = await sequelize.query('SELECT * FROM products');
    console.log('Produtos:', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Erro ao verificar dados:', error);
  } finally {
    await sequelize.close();
  }
}

checkData();
