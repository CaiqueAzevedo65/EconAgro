const { Sequelize } = require('sequelize');
const config = require('../src/config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbConfig.storage,
  logging: false
});

async function checkSchema() {
  try {
    console.log('Verificando esquema do banco de dados...');
    
    // Verificar tabelas existentes
    const [tables] = await sequelize.query(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
    );
    
    console.log('Tabelas encontradas:');
    console.log(tables.map(t => t.name).join(', '));
    
    // Verificar estrutura das tabelas
    for (const table of tables) {
      console.log(`\nEstrutura da tabela ${table.name}:`);
      try {
        const [columns] = await sequelize.query(`PRAGMA table_info(${table.name})`);
        console.log(columns);
      } catch (error) {
        console.error(`Erro ao verificar a tabela ${table.name}:`, error.message);
      }
    }
  } catch (error) {
    console.error('Erro ao verificar esquema:', error);
  } finally {
    await sequelize.close();
  }
}

checkSchema();
