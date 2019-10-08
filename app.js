let express = require('express');
let app = express();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
//const logger       = require('morgan');
const path         = require('path');
//var session        = require("express-session");

mongoose
  .connect('mongodb://localhost/tripmouse', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));




let index = require('./routes/index');
app.use('/', index);

let login = require('./routes/auth');
app.use('/', login);

//module.exports = app;

app.listen(3000,()=> {
    console.log("App is listening to port", 3000)
  })