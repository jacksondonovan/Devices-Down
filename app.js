const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

var signUp = require('./routes/sign-up');
var logIn = require('./routes/log-in');

app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/sign-up', signUp);
app.use('/log-in' , logIn);


// app.use(express.static(path.join(__dirname,'views')));
// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'app')));

app.get('/',(req,res)=>{
  res.render('index')
});

app.listen(port,(req,res)=>{
  console.log('listening on port ' , port);
})

module.exports = app;
