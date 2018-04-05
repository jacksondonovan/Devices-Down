var knex = require('./knex')

function addUser(obj){
  return knex('users').insert(obj)
}

function getUsers(){
  return knex('users').select()
}


function updateUser(obj){
  return knex('users').select().where('username',obj.username).update({
    'first_name': obj.first_name,
    'last_name': obj.last_name,
    'state': obj.state,
    'bio': obj.bio
  })
}

function deleteUser(username){
  return knex('users').select().where('username',username).del()
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
};
