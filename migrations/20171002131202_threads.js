'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('threads', (table) => {
    table.increments('id');
    table.string('title').notNullable().defaultTo('');
    table.string('user_id').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('threads');
};
