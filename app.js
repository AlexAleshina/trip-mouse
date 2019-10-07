let express = require('express');
let app = express();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
var session        = require("express-session");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



let index = require('./routes/index');
app.use('/', index);

let login = require('./routes/login');
app.use('/', login);

let signup = require('./routes/signup');
app.use('/', signup);

module.exports = app;