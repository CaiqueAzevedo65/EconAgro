# EconAgro - Backend

Backend da aplicação EconAgro, uma plataforma para gerenciamento de produtos agrícolas.

## 🚀 Começando

### 🛠️ Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- MySQL 5.7 ou superior
- Servidor MySQL em execução

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/econagro.git
   cd econagro/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env` com as configurações do seu banco de dados MySQL:
   ```
   # Configurações do Banco de Dados
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=econagro_dev
   DB_HOST=localhost
   DB_PORT=3306
   
   # Outras configurações
   NODE_ENV=development
   PORT=3001
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3001`

## 🛠️ Comandos Úteis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm test` - Executa os testes
- `npm run lint` - Verifica problemas de estilo de código
- `npm run lint:fix` - Corrige automaticamente problemas de estilo
- `npm run migrate` - Executa as migrações do banco de dados
- `npm run migrate:reset` - Reseta e executa todas as migrações novamente
- `npm run migrate:undo` - Desfaz a última migração
- `npm run seed` - Popula o banco de dados com dados de exemplo

## 🗄️ Configuração do Banco de Dados

O projeto está configurado para usar o MySQL. Certifique-se de ter um servidor MySQL em execução e um banco de dados criado antes de iniciar a aplicação.

### Criando o banco de dados

```sql
CREATE DATABASE econagro_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
# Configurações do Banco de Dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=econagro_dev
DB_HOST=localhost
DB_PORT=3306

# Outras configurações
NODE_ENV=development
PORT=3001
```

## 📚 Documentação da API

A documentação da API está disponível em `/api-docs` quando o servidor estiver em execução.

## 🏗️ Estrutura do Projeto

```
backend/
├── src/
│   ├── config/         # Configurações da aplicação
│   ├── controllers/    # Controladores das rotas
│   ├── middlewares/    # Middlewares
│   ├── models/         # Modelos do banco de dados
│   ├── routes/         # Definições de rotas
│   ├── utils/          # Utilitários
│   ├── app.js          # Configuração do Express
│   └── server.js       # Ponto de entrada da aplicação
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
└── package.json        # Dependências e scripts
```

## 🛡️ Segurança

- Validação de entrada em todas as rotas
- Tratamento de erros centralizado
- Headers de segurança configurados
- Rate limiting (se necessário)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📦 API EconAgro - Backend

API RESTful para o sistema EconAgro, desenvolvida com Node.js, Express e MongoDB.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **ESLint** - Linter para manter a qualidade do código
- **Prettier** - Formatador de código

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (local ou Atlas)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/econagro-backend.git
   cd econagro-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   NODE_ENV=development
   PORT=3001
   MONGODB_URI=sua_string_de_conexao_mongodb
   JWT_SECRET=seu_segredo_jwt
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3001`

## 🚀 Rotas da API

### Categorias

- `GET /api/categories` - Lista todas as categorias
- `GET /api/categories/:id` - Obtém uma categoria específica
- `POST /api/categories` - Cria uma nova categoria
- `PUT /api/categories/:id` - Atualiza uma categoria existente
- `DELETE /api/categories/:id` - Remove uma categoria

### Produtos

- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:id` - Obtém um produto específico
- `GET /api/products/category/:categoryName` - Lista produtos por categoria
- `POST /api/products` - Cria um novo produto
- `PUT /api/products/:id` - Atualiza um produto existente
- `DELETE /api/products/:id` - Remove um produto

## 🛠️ Comandos Úteis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm run lint` - Verifica problemas de estilo de código
- `npm run lint:fix` - Corrige automaticamente problemas de estilo

## 🗄️ Estrutura do Projeto

```
src/
├── config/           # Configurações do banco de dados e outras configurações
├── controllers/       # Lógica dos controladores
├── middlewares/       # Middlewares personalizados
├── models/            # Modelos do MongoDB
├── routes/            # Definições de rotas
├── utils/             # Utilitários e helpers
├── validators/        # Validações de entrada
├── app.js             # Configuração do Express
└── server.js          # Ponto de entrada da aplicação
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Seu Nome] - [Seu Email]

# 🌾 EconAgro - Backend

API RESTful para o sistema EconAgro, uma plataforma completa para gerenciamento de produtos agrícolas com upload de imagens.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript (v14+)
- **Express** - Framework web minimalista
- **MongoDB** - Banco de dados NoSQL (Atlas)
- **Mongoose** - ODM para MongoDB
- **Cloudinary** - Armazenamento e otimização de imagens
- **ESLint + Prettier** - Qualidade e formatação de código
- **Express Validator** - Validação de dados de entrada

## 📋 Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **MongoDB Atlas** (ou instância local)
- **Conta Cloudinary** (gratuita)
- **npm** ou **yarn**

## 🛠️ Instalação

### 1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/econagro.git
cd econagro/backend
```

### 2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

### 3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Configurações do Servidor
PORT=3001
NODE_ENV=development

# MongoDB Atlas
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Cloudinary (Upload de Imagens)
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret

# CORS (Opcional)
CORS_ORIGIN=http://localhost:3000
```

### 4. **Inicie o servidor**
```bash
npm run dev
# ou
yarn dev
```

🎉 **Servidor disponível em:** `http://localhost:3001`

## 📚 Documentação da API

### 📄 **Postman Collection**
Importe o arquivo `EconAgro_API_Postman_Collection.json` no Postman para testar todas as rotas.

**📖 Guia:** Consulte o `POSTMAN_GUIDE.md` para instruções detalhadas.

### 🛣️ **Rotas Disponíveis**

#### **Health Check**
- `GET /api/health` - Status da API

#### **Categorias**
- `GET /api/categories` - Lista todas as categorias
- `POST /api/categories` - Cria nova categoria
- `GET /api/categories/:id` - Busca categoria por ID
- `PUT /api/categories/:id` - Atualiza categoria
- `DELETE /api/categories/:id` - Remove categoria

#### **Produtos** *(com upload de imagens)*
- `GET /api/products` - Lista todos os produtos
- `POST /api/products` - Cria produto (**FormData**)
- `GET /api/products/:id` - Busca produto por ID
- `PUT /api/products/:id` - Atualiza produto (**FormData**)
- `DELETE /api/products/:id` - Remove produto
- `GET /api/products/category/:categoryName` - Produtos por categoria

⚠️ **Importante:** Rotas POST e PUT de produtos usam **FormData** para upload de imagens.

## 🏗️ Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   ├── mongodb.js        # Configuração MongoDB
│   │   └── cloudinary.js     # Configuração Cloudinary
│   ├── controllers/
│   │   ├── product.controller.js    # Lógica de produtos
│   │   └── category.controller.js   # Lógica de categorias
│   ├── middlewares/
│   │   ├── errorHandler.js   # Tratamento centralizado de erros
│   │   ├── validator.js      # Middleware de validação
│   │   └── upload.js         # Middleware de upload (Cloudinary)
│   ├── models/
│   │   ├── Product.js        # Schema de produtos
│   │   ├── category.js       # Schema de categorias
│   │   └── index.js          # Exportação de modelos
│   ├── routes/
│   │   ├── product.routes.js # Rotas de produtos
│   │   ├── category.routes.js# Rotas de categorias
│   │   └── index.js          # Router principal
│   ├── utils/
│   │   └── errors.js         # Classes de erro personalizadas
│   ├── validators/
│   │   └── product.validator.js # Validações de produtos
│   ├── app.js                # Configuração Express
│   └── server.js             # Ponto de entrada
├── uploads/                  # Arquivos locais (mantido para referência)
├── .env                      # Variáveis de ambiente (não versionado)
├── .env.example              # Modelo de configuração
├── .gitignore                # Arquivos ignorados pelo Git
├── package.json              # Dependências e scripts
├── EconAgro_API_Postman_Collection.json # Coleção Postman
└── POSTMAN_GUIDE.md          # Guia da documentação
```

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor com nodemon (auto-restart)
npm start           # Servidor em produção

# Qualidade de Código
npm run lint        # Verifica problemas de código
npm run lint:fix    # Corrige problemas automaticamente

# Build
npm run build       # Prepara para produção
```

## 🎯 Funcionalidades

### ✅ **Gerenciamento de Produtos**
- CRUD completo com validações
- Upload de imagens para Cloudinary
- Busca por categoria
- Otimização automática de imagens (800x600, qualidade automática)
- Limpeza automática de imagens antigas

### ✅ **Gerenciamento de Categorias**
- CRUD com validação de integridade referencial
- Prevenção de exclusão com produtos associados
- Relacionamento virtual com produtos

### ✅ **Upload de Imagens**
- Integração com Cloudinary
- Validação de tipo e tamanho (max 5MB)
- Formatos aceitos: jpg, jpeg, png, webp
- URLs diretas do CDN

### ✅ **Segurança e Validação**
- Validação rigorosa com express-validator
- Tratamento centralizado de erros
- Sanitização de dados de entrada
- Headers de segurança configurados
- CORS configurável por ambiente

## 🔧 Configuração de Produção

### **Variáveis de Ambiente**
```env
NODE_ENV=production
PORT=3001
MONGODB_URI=sua_string_producao
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key  
CLOUDINARY_API_SECRET=seu_api_secret
CORS_ORIGIN=https://seudominio.com
```

### **Deploy**
```bash
npm run build
npm start
```

## 📝 Modelos de Dados

### **Product**
```javascript
{
  name: String (obrigatório, 3-100 chars),
  description: String (opcional),
  price: Number (obrigatório, > 0),
  quantity: Number (padrão: 0),
  category: ObjectId (referência para Category),
  image: String (URL do Cloudinary),
  active: Boolean (padrão: true),
  createdAt: Date,
  updatedAt: Date
}
```

### **Category**
```javascript
{
  name: String (obrigatório, único),
  description: String (opcional),
  createdAt: Date,
  updatedAt: Date,
  // Virtual: products (array de produtos relacionados)
}
```

## 🚨 Tratamento de Erros

- **400 Bad Request** - Dados inválidos
- **404 Not Found** - Recurso não encontrado  
- **409 Conflict** - Dados duplicados (ex: nome de categoria)
- **422 Unprocessable Entity** - Erro de validação
- **500 Internal Server Error** - Erro interno

Todas as respostas de erro seguem o padrão:
```json
{
  "success": false,
  "message": "Descrição do erro",
  "errors": [/* detalhes específicos */]
}
```

## 🧪 Testando a API

1. **Importe a coleção Postman**
2. **Configure o ambiente** (`baseUrl: http://localhost:3001/api`)
3. **Teste o health check:** `GET /api/health`
4. **Crie uma categoria:** `POST /api/categories`
5. **Crie um produto com imagem:** `POST /api/products` (FormData)

**📖 Consulte o `POSTMAN_GUIDE.md` para exemplos detalhados.**

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**🌾 EconAgro** - Desenvolvido com ❤️ para o agronegócio
