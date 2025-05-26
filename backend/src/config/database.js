const { Sequelize } = require('sequelize');
const { NODE_ENV, DB_URI, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const config = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: console.log
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    url: DB_URI,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

const env = NODE_ENV || 'development';
const dbConfig = config[env];

let sequelize;

if (env === 'production') {
  sequelize = new Sequelize(DB_URI, {
    ...dbConfig,
    dialect: 'postgres',
    logging: false
  });
} else {
  sequelize = new Sequelize({
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST || 'localhost',
    ...dbConfig
  });
}

// Testar a conexão
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
    process.exit(1);
  }
};

testConnection();

module.exports = sequelize;