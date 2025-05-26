const { Sequelize } = require('sequelize');
const config = require('../src/config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbConfig.storage,
  logging: false
});

async function checkTables() {
  try {
    console.log('Verificando dados nas tabelas...');
    
    // Verificar categorias
    const [categories] = await sequelize.query('SELECT * FROM categories');
    console.log('\nCategorias:');
    console.table(categories);
    
    // Verificar produtos
    const [products] = await sequelize.query('SELECT * FROM products');
    console.log('\nProdutos:');
    console.table(products);
    
    // Verificar chaves estrangeiras
    if (products.length > 0 && categories.length > 0) {
      console.log('\nVerificando relacionamentos...');
      const invalidProducts = products.filter(p => 
        !categories.some(c => c.id === p.category_id)
      );
      
      if (invalidProducts.length > 0) {
        console.log('\nProdutos com category_id inválido:');
        console.table(invalidProducts);
      } else {
        console.log('Todos os produtos têm category_id válido.');
      }
    }
  } catch (error) {
    console.error('Erro ao verificar tabelas:', error);
  } finally {
    await sequelize.close();
  }
}

checkTables();
