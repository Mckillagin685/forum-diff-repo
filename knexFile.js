'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/forum'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/forum_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
