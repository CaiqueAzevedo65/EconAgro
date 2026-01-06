# EconAgro - Technology for Agribusiness 🌱

EconAgro é uma plataforma web moderna desenvolvida para revolucionar a gestão do agronegócio, oferecendo soluções tecnológicas integradas para produtores rurais.

> **Nota:** Este projeto foi refatorado e modernizado para **Next.js 14** e **Tailwind CSS**.

## 🚀 Recursos

- **E-commerce Agrícola:** Navegação por categorias, carrinho de compras, e busca de produtos.
- **Interface Responsiva:** Design adaptável para dispositivos móveis e desktop utilizando Tailwind CSS.
- **Gestão de Estado:** Uso de Context API para gerenciamento global de carrinho e busca.
- **Arquitetura Modular:** Separação clara de responsabilidades (Services, Contexts, Hooks) com App Router.

## 🏗️ Estrutura do Projeto (Frontend)

```
frontend/
├── public/           # Arquivos estáticos (imagens públicas, etc)
└── src/              # Código-fonte da aplicação
    ├── app/          # Páginas e Layouts (App Router)
    ├── assets/       # Recursos estáticos importados (imagens)
    ├── components/   # Componentes reutilizáveis (Header, Footer, Cart, etc.)
    ├── context/      # Gerenciamento de estado global (CartContext, SearchContext)
    ├── data/         # Dados estáticos centralizados (categorias)
    ├── hooks/        # Custom Hooks (useCartLogic)
    └── services/     # Comunicação com API (Axios, productService)
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React para produção (App Router)
- **React 18** - Biblioteca para construção de interfaces
- **Tailwind CSS** - Framework CSS utilitário
- **Context API** - Gerenciamento de estado nativo do React
- **Axios** - Cliente HTTP para integração com API
- **Font Awesome** - Ícones vetoriais e responsivos

### Backend (Separado)
- O backend deste projeto foi desacoplado e reside em um repositório dedicado, utilizando Node.js, Express e MongoDB.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm (versão 9 ou superior)

## 🔧 Instalação e Execução

1. Acesse o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ pela equipe EconAgro
