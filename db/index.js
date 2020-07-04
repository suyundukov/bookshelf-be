const knex = require('knex');

const logger = require('../config/logger');

const config = require('../knexfile');

const connection = knex(config[process.env.NODE_ENV]);

if (process.env.NODE_ENV === 'development') {
  connection.on('query', (query) => {
    logger.debug(query.sql);
  });
}

module.exports = connection;
