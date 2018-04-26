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

  function determineWeekNumber(m,d){
    if(m === 4){
      return 0;
    }
    if(m === 5){
      if(d <= 6){
        return 0;
      }
      if(d <= 13 && d > 6){
        return 1;
      }
      if(d > 13 && d <= 20){
        return 2;
      }
      if(d > 20){
        return 3;
      }
    }
    if(m === 6){
      if(d <= 6){
        return 4;
      }
      if(d > 6 && d <= 13){
        return 5;
      }
      if(d > 13 && d <= 20){
        return 6;
      }
      if(d > 20){
        return 7;
      }
    }
  }
  var week = determineWeekNumber(month,day)

  obj.date = completeDate;
  obj.week_number = week;

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
