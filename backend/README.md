# EconAgro - Backend

Backend da aplicação EconAgro, uma plataforma para gerenciamento de produtos agrícolas.

## 🚀 Começando

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- SQLite (desenvolvimento) ou PostgreSQL (produção)

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
   Edite o arquivo `.env` com as configurações do seu ambiente.

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
- `npm run lint` - Executa o linter
- `npm run migrate` - Executa as migrações do banco de dados
- `npm run seed` - Popula o banco de dados com dados de exemplo

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
