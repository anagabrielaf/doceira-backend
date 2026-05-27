markdown# 🧁 DoceiraBR - Backend

Backend da aplicação DoceiraBR desenvolvido com Express, TypeScript, Drizzle ORM e PostgreSQL.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Drizzle ORM
- PostgreSQL
- Docker Compose

## ⚙️ Como executar

### Pré-requisitos
- Node.js v18+
- Docker Desktop

### Instalação

1. Clone o repositório:
git clone https://github.com/anagabrielaf/doceira-backend.git
cd doceira-backend

2. Instale as dependências:
npm install

3. Suba o banco de dados:
docker-compose up -d

4. Crie as tabelas:
npx drizzle-kit push

5. Popular o banco com dados iniciais:
npx tsx src/seed.ts

6. Inicie o servidor:
npm run dev

O servidor vai rodar em **http://localhost:3000**

## 📋 Rotas da API

### Receitas
- `GET /receitas` — listar receitas publicadas
- `GET /receitas/:id` — buscar receita por ID
- `POST /receitas` — criar receita
- `PUT /receitas/:id` — atualizar receita
- `DELETE /receitas/:id` — deletar receita

### Usuários
- `GET /usuarios` — listar usuários
- `GET /usuarios/:id` — buscar usuário por ID
- `POST /usuarios` — criar usuário
- `PUT /usuarios/:id` — atualizar usuário
- `DELETE /usuarios/:id` — deletar usuário

### Categorias
- `GET /categorias` — listar categorias
- `GET /categorias/:id` — buscar categoria por ID
- `POST /categorias` — criar categoria
- `PUT /categorias/:id` — atualizar categoria
- `DELETE /categorias/:id` — deletar categoria

### Comentários
- `GET /comentarios` — listar comentários
- `GET /comentarios/receita/:receitaId` — comentários por receita
- `POST /comentarios` — criar comentário
- `DELETE /comentarios/:id` — deletar comentário