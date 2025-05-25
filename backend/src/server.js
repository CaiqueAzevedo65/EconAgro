const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./database');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração do CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Para navegadores legados
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta 'public'
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Log de requisições
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Rotas
app.use('/api/products', productsRouter);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API EconAgro está funcionando!' });
});

// Rota de teste de CORS
app.get('/api/test-cors', (req, res) => {
  res.json({ message: 'Teste de CORS bem-sucedido!' });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});

// Sincronizar modelos e iniciar o servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados conectado e sincronizado');
    
    // Criar diretório de imagens se não existir
    const fs = require('fs');
    const imagesDir = path.join(__dirname, '../public/images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
      console.log('Diretório de imagens criado:', imagesDir);
    }
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Acesse: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  });

// Tratamento de sinais de desligamento
process.on('SIGINT', () => {
  console.log('\nEncerrando o servidor...');
  process.exit(0);
});

module.exports = app;