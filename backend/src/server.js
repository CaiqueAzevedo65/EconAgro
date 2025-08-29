require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/mongodb');
const { PORT = 3001, NODE_ENV } = process.env;

let server;

// Conectar ao MongoDB e só então iniciar o servidor
connectDB()
  .then(() => {
    server = app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log(`🌍 Ambiente: ${NODE_ENV || 'development'}`);
      console.log(`📅 ${new Date().toLocaleString()}`);
    });
  })
  .catch((err) => {
    console.error('❌ Falha ao conectar ao MongoDB. Encerrando aplicação.', err);
    process.exit(1);
  });

// Tratamento de erros não capturados
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

module.exports = server;