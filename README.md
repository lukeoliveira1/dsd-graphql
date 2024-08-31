# dsd-graphQL

## Descrição

Este projeto é uma aplicação backend desenvolvida em Node.js com TypeScript, usando o Knex.js para interações com o banco de dados. Ele fornece uma API GraphQL para gerenciar experiências, projetos e habilidades.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Knex.js
- Apollo Server (GraphQL)
- SQLite

## Instalação

Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

Configure o banco de dados (SQLite, por exemplo):

    ```bash
    npx knex migrate:latest
    ```

## Execução

1. Para rodar o servidor em ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

2. O servidor estará disponível em [http://localhost:4000](http://localhost:4000).
