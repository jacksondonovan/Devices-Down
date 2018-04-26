const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery');
const bcrypt = require('bcrypt');

//mounted on /community-board

router.get('/:username',(req,res)=>{
  linkQuery.getUsers().where('username',req.params.username).first().then((foundUser)=>{
    res.render('community-board',{thisuser: foundUser})
  })
});

module.exports = router;
