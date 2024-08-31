import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data.db',  // Caminho para o arquivo SQLite
    },
    useNullAsDefault: true,  // Para o SQLite, use NULL como padrão
  },
};

export default config;
