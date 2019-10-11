require('dotenv').config();
let express = require('express');
let app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
var session = require("express-session");
//const logger       = require('morgan');
const path = require('path');
//var session        = require("express-session");

hbs.registerPartials(__dirname + '/views/partials');

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'keyboard cat',
  expires: { maxAge: new Date(Date.now() + (60 * 1000 * 30)) },
  resave: true,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  res.locals.sessionJson = JSON.stringify(req.session);
  res.locals.user = req.session.user
  next();
});


let index = require('./routes/index');
app.use('/', index);

let login = require('./routes/auth');
app.use('/', login);
/*
app.use('/*', (req, res, next) => {
  if (req.session.user) next();
  else res.redirect('/login')
});
*/
let search = require('./routes/search');
app.use('/', search);

let add = require('./routes/addDeleteTrip');
app.use('/', add);

let trip = require('./routes/mytrips');
app.use('/', trip);    



//module.exports = app;

app.listen(process.env.PORT, () => {
  console.log("App is listening to port", 3000)
})