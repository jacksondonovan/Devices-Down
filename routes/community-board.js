const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery');
const bcrypt = require('bcrypt');

//mounted on /community-board

router.get('/:username',(req,res)=>{
  linkQuery.getUsers().where('username',req.params.username).first().then((foundUser)=>{
    linkQuery.getPosts().then((allPosts)=>{
      res.render('community-board',{
        thisuser: foundUser,
        eachPost: allPosts
      })
    })
  })
});


router.post('/add-post/:username',(req,res)=>{
  req.body.author = req.params.username;
  linkQuery.addPost(req.body).then(()=>{
    res.redirect('/community-board/' + req.params.username)
  })
})

module.exports = router;
