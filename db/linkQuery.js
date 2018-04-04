var knex = require('./knex')

function addUser(obj){
  return knex('users').insert(obj)
}

function getUsers(){
  return knex('users').select()
}

module.exports = {
  addUser,
  getUsers
};
