const express = require('express');
let router = express();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/help', (req, res, next) => {
    res.render('help');
});

router.get('/mytrips', (req, res, next) => {
    res.render('mytrips');
});


router.get('/result', (req, res, next) => {
    res.render('result');
});


module.exports = router;