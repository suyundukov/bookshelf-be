/**
 * @typedef {import('knex')} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable('accounts', (table) => {
    table.increments();
    table.string('full_name', 32).notNullable();
    table.string('email').notNullable().unique();
    table.string('phone', 15).unique();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    table.boolean('email_confirmed').defaultTo(false);
    table.boolean('terms_accepted');
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable('accounts');
};
