const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  middlewares() {
    this.app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
    
    // Configurações de segurança básicas
    this.app.disable('x-powered-by');
    
    // Configuração de CORS
    const getCorsOrigins = () => {
      if (process.env.NODE_ENV === 'production') {
        // Em produção, use CORS_ORIGIN ou um padrão seguro
        return process.env.CORS_ORIGIN ? 
          process.env.CORS_ORIGIN.split(',').map(origin => origin.trim()) : 
          ['https://econagro.onrender.com'];
      }
      // Em desenvolvimento, seja mais permissivo
      return ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'];
    };

    const corsOptions = {
      origin: getCorsOrigins(),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      optionsSuccessStatus: 200
    };

    this.app.use(cors(corsOptions));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // Logs em desenvolvimento
    if (process.env.NODE_ENV !== 'production') {
      this.app.use(morgan('dev'));
    }
  }

  routes() {
    // Rotas da API
    this.app.use('/api', routes);
    
    // Rota raiz
    this.app.get('/', (req, res) => {
      res.json({
        name: 'EconAgro API',
        version: '1.0.0',
        status: 'online'
      });
    });
    
    // Rota para 404
    this.app.use((req, res) => {
      res.status(404).json({
        success: false,
        message: 'Rota não encontrada'
      });
    });
  }

  errorHandling() {
    // Middleware de tratamento de erros
    this.app.use(errorHandler);
  }
}

module.exports = new App().app;