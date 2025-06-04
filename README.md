# EconAgro - Technology for Agribusiness 🌱

EconAgro é uma plataforma web moderna desenvolvida para revolucionar a gestão do agronegócio, oferecendo soluções tecnológicas integradas para produtores rurais.

## 🚀 Recursos

- Gerenciamento de propriedades rurais
- Monitoramento de safras
- Controle financeiro
- Análise de dados agrícolas
- Relatórios personalizados
- Interface responsiva e intuitiva

## 🏗️ Estrutura do Projeto

```
.
├── backend/               # API RESTful
│   ├── src/               # Código-fonte do backend
│   │   ├── config/       # Configurações do servidor
│   │   ├── controllers/  # Lógica dos controladores
│   │   ├── models/       # Modelos de dados
│   │   ├── routes/       # Definição de rotas
│   │   └── server.js     # Ponto de entrada da aplicação
│   └── uploads/          # Arquivos enviados
│
└── frontend/             # Aplicação React
    ├── public/           # Arquivos estáticos
    └── src/              # Código-fonte do frontend
        ├── assets/       # Recursos estáticos (imagens, estilos)
        ├── components/   # Componentes reutilizáveis
        ├── pages/        # Páginas da aplicação
        └── App.js        # Componente raiz
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticação via JSON Web Tokens
- **Express Validator** - Validação de dados
- **CORS** - Middleware para habilitar CORS
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Morgan** - Logger de requisições HTTP
- **Moment Timezone** - Manipulação de datas e fusos horários
- **HTTP Status Codes** - Constantes para códigos de status HTTP

### Frontend
- **React 18** - Biblioteca para construção de interfaces
- **React Router DOM** - Roteamento na aplicação
- **React Bootstrap 5** - Componentes de UI responsivos
- **Font Awesome** - Ícones
- **Axios** - Cliente HTTP para requisições à API
- **Web Vitals** - Métricas de performance

### Ferramentas de Desenvolvimento
- **Nodemon** - Reinício automático do servidor em desenvolvimento
- **ESLint** - Linter para padronização de código
- **Prettier** - Formatador de código
- **Jest** - Framework de testes
- **Supertest** - Testes de integração HTTP

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- MongoDB (local ou Atlas)

## 🔧 Instalação

### Backend

1. Acesse o diretório do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:
```
PORT=3001
MONGODB_URI=sua_string_de_conexao_mongodb
JWT_SECRET=seu_segredo_jwt
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Frontend

1. Acesse o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:
```
REACT_APP_API_URL=http://localhost:3001
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

## 🚀 Scripts Disponíveis

### Backend
- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em modo de desenvolvimento com nodemon
- `npm test` - Executa os testes
- `npm run migrate` - Executa migrações do banco de dados
- `npm run seed` - Popula o banco de dados com dados iniciais

### Frontend
- `npm start` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes
- `npm run build` - Cria uma versão otimizada para produção

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adiciona uma feature incrível'`)
4. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
5. Abra um Pull Request

## 📝 Padrões de Código

- Siga as convenções do React
- Mantenha os componentes pequenos e reutilizáveis
- Documente funções e componentes importantes
- Escreva testes para novas funcionalidades

## 🔐 Segurança

- Autenticação JWT
- Proteção CSRF
- Sanitização de inputs
- CORS configurado
- Headers de segurança habilitados

## 📱 Suporte

Para suporte, envie um e-mail para suporte@econagro.com.br ou abra uma issue no GitHub.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Colaboradores
- Comunidade de código aberto

---

Desenvolvido com ❤️ pela equipe EconAgro
