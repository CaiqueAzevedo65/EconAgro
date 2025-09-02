require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/mongodb');
const { testCloudinaryConnection } = require('./config/cloudinary');
const { PORT = 3001, NODE_ENV } = process.env;

let server;

// Conectar ao MongoDB e testar Cloudinary, depois iniciar o servidor
connectDB()
  .then(async () => {
    // Testar conexão com Cloudinary
    await testCloudinaryConnection();
    
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