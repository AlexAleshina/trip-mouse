let express = require('express');
let app = express();

const index = require('./routes/index');
app.use('/'. index);