require('dotenv').config();

const knex = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
      stub: './db/stub/migration.js',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
      stub: './db/stub/migration.js',
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3',
    },
  },
};

module.exports = knex;
