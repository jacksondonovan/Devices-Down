const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery');
const bcrypt = require('bcrypt');

//mounted on /log-in

router.get('/',(req,res)=>{
  res.render('log-in')
});

router.post('/profile',(req,res)=>{
  linkQuery.getUsers().where('username',req.body.username).first().then((foundUser)=>{
    if(foundUser){
      bcrypt.compare(req.body.password,foundUser.password).then((passwordsMatch)=>{
        if(passwordsMatch){
          res.redirect('/profile/' + req.body.username)
        } else{
          console.log("INCOREECT PASS");
          res.redirect('/')
        }
      })
    } else {
      res.redirect('/');
    }
  })
})

module.exports = router;
