const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery');
const bcrypt = require('bcrypt');

//mounted on /profile

router.post('/',(req,res)=>{
  linkQuery.getUsers().where('username',req.body.username).first().then((user)=>{
    console.log(user);
    if(user){
      res.redirect('/')
    } else {
      bcrypt.hash(req.body.password,10).then((hash)=>{
        var newUser = req.body
        newUser.password = hash
        linkQuery.addUser(req.body).then((data)=>{
          res.redirect('/profile/' + req.body.username)
        })
      })
    }
  })
})

router.get('/:username',(req,res)=>{
  linkQuery.getUsers().where('username',req.params.username).first().then((data)=>{
    console.log(data);
    res.render('profile',{thisuser:data})
  })
})

module.exports = router;
