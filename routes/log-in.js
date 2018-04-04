const express = require('express');
const router = express.Router();

//mounted on /log-in

router.get('/',(req,res)=>{
  res.render('log-in')
});

module.exports = router;
