const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery')
const bcrypt = require('bcrypt');
//mounted at /sign-up

router.get('/',(req,res)=>{
  res.render('sign-up')
});

router.post('/new-user',(req,res)=>{
  linkQuery.getUsers().where('email',req.body.email).first().then((foundUser)=>{
    if(foundUser){
      res.redirect('/')
    } else {
      bcrypt.hash(req.body.password,10).then((hash)=>{
        var newUser = req.body
        newUser.password = hash
        linkQuery.addUser(req.body).then(()=>{
        res.redirect('profile/' + req.body.username)
        })
      })
    }
  })
})

module.exports = router;
