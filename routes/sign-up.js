const express = require('express');
const router = express.Router();

//mounted at /sign-up

router.get('/',(req,res)=>{
  res.render('sign-up')
});

module.exports = router;
