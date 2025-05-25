import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona um interceptor para logar as requisições
api.interceptors.request.use(
  (config) => {
    console.log(`Enviando requisição: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Adiciona um interceptor para logar as respostas
api.interceptors.response.use(
  (response) => {
    console.log(`Resposta recebida: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;