const Trip = require("../models/Trip");
const express = require('express');
let router = express();

router.get('/mytrips', (req, res, next) => {
    Trip.find({ userId: { $eq: req.session.user._id } })
        .then((trip) => {
            res.render('mytrips', { trip })
        })
        .catch((err) => {
            renderError(err.message)
        })

});

module.exports = router;