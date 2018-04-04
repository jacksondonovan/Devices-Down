const express = require('express');
const router = express.Router();
const linkQuery = require('../db/linkQuery')

//mounted at /sign-up

router.get('/',(req,res)=>{
  res.render('sign-up')
});

router.post('/new-user',(req,res)=>{
  linkQuery.getUsers().where('email',req.body.email).first().then((foundUser)=>{
    if(foundUser){
      res.redirect('/')
    } else {
      linkQuery.addUser(req.body).then(()=>{
        res.redirect('profile/' + req.body.username)
      })
    }
  })
})

// router.post('/prof',(req,res)=>{
//   linkQuery.getUsers().where('username',req.body.username).first().then((user)=>{
//     console.log(user);
//     if(!user){
//       res.redirect('/')
//     } else{
//       res.redirect('/profile/' + req.body.username)
//     }
//   })
// })

module.exports = router;
