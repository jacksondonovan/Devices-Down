
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',function(table){
    table.increments()
    table.string('email').notNullable().unique()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('state')
    table.string('bio')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
