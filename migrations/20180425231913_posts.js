
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',function(table){
    table.increments()
    table.string('author').references('username').inTable('users')
    table.string('post_head').notNullable()
    table.string('post_body').notNullable()
    table.integer('week_number')
    table.string('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
