const express = require('express');
let router = express();

router.get('/', (req, res, next) => {
    res.render('index');
  });

  module.exports = router;