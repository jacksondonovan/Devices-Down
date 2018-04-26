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

function addPost(obj){
  var dt = new Date()
  var month = dt.getMonth()+1;
  var day = dt.getDate();
  var year = dt.getFullYear();
  var completeDate = month + '/' + day + '/' + year;

  obj.date = completeDate;

  return knex('posts').insert(obj)
}

function getPosts(){
  return knex('posts').select()
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  addPost,
  getPosts
};
