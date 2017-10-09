
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.string('title').notNullable().defaultTo('');
    table.text('body').notNullable().defaultTo('');
    table.string('user_id').notNullable().defaultTo('');
    table.string('post_id').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
