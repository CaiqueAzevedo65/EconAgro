# EconAgro - Technology for Agribusiness 🌱

EconAgro é uma plataforma web moderna desenvolvida para revolucionar a gestão do agronegócio, oferecendo soluções tecnológicas integradas para produtores rurais.

> **Nota:** Este projeto está em fase de refatoração e modernização do Frontend, preparando-se para uma futura migração para Next.js e Tailwind CSS.

## 🚀 Recursos

- **E-commerce Agrícola:** Navegação por categorias, carrinho de compras, e busca de produtos.
- **Interface Responsiva:** Design adaptável para dispositivos móveis e desktop utilizando React-Bootstrap.
- **Gestão de Estado:** Uso de Context API para gerenciamento global de carrinho e busca.
- **Arquitetura Modular:** Separação clara de responsabilidades (Services, Contexts, Hooks).

## 🏗️ Estrutura do Projeto (Frontend)

```
frontend/
├── public/           # Arquivos estáticos (index.html, manifest, icons)
└── src/              # Código-fonte da aplicação
    ├── assets/       # Recursos estáticos (imagens)
    ├── components/   # Componentes reutilizáveis (Header, Footer, Cart, etc.)
    ├── context/      # Gerenciamento de estado global (CartContext, SearchContext)
    ├── data/         # Dados estáticos centralizados (categorias)
    ├── hooks/        # Custom Hooks (useCartLogic)
    ├── pages/        # Páginas da aplicação (Home, Login, Register, CategoryPage)
    ├── routes/       # Configuração de rotas (React Router v6)
    ├── services/     # Comunicação com API (Axios, productService)
    ├── Styles/       # Estilos CSS (em migração para Bootstrap classes)
    └── App.js        # Componente raiz
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para construção de interfaces
- **React Router DOM v6** - Roteamento dinâmico e navegação
- **React Bootstrap 5** - Framework de UI para componentes responsivos e acessíveis
- **Context API** - Gerenciamento de estado nativo do React
- **Axios** - Cliente HTTP para integração com API
- **Font Awesome** - Ícones vetoriais e responsivos

### Backend (Separado)
- O backend deste projeto foi desacoplado e reside em um repositório dedicado, utilizando Node.js, Express e MongoDB.

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior recomendada)
- npm (versão 7 ou superior)

## 🔧 Instalação e Execução

1. Acesse o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz da pasta `frontend` se necessário (embora existam defaults):
```
REACT_APP_API_URL=http://localhost:3001/api
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```
A aplicação estará disponível em `http://localhost:3000`.

## 🔄 Status da Refatoração

- [x] Migração de componentes chave para React-Bootstrap (Header, Footer, Login, Register, Cart, Contato).
- [x] Centralização da lógica de serviços (productService).
- [x] Implementação de rotas dinâmicas para categorias.
- [x] Melhorias de UX e Feedback visual (Loading states, Fallback images).
- [ ] Migração completa para Next.js (Planejado).
- [ ] Implementação de Tailwind CSS (Planejado).

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade'`)
5. Faça o Push da Branch (`git push origin feature/NovaFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ pela equipe EconAgro
