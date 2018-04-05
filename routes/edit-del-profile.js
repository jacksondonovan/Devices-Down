const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery');

//mounted on edit-profile

router.post('/updated',(req,res)=>{
  linkQuery.updateUser(req.body).then(()=>{
    res.redirect('/profile/' + req.body.username)
  })
})

router.post('/delete/:username',(req,res)=>{
  linkQuery.deleteUser(req.params.username).then(()=>{
    res.redirect('/')
  })
})

router.get('/:username',(req,res)=>{
  linkQuery.getUsers().where('username',req.params.username).first().then((userData)=>{
    res.render('edit-profile',{editthisuser:userData})
  })
})

module.exports = router;
