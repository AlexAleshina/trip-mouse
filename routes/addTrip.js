const express = require('express');
let router = express();
const Trip = require("../models/Trips");
/*
router.get('/add', (req, res, next) => {

    const { title, director, stars, image, description, showtimes } = req.body;
    const newMovie = new Movie({ title, director, stars, image, description, showtimes });

    newMovie.save()
        .then((movie) => {
            res.redirect(`/movies`)
        })
        .catch((error) => {
            console.log(error);
        })
}
)
*/
router.post('/add', (req, res) => {

    const renderError = (msg) => {
        console.log(msg);
        res.render('searchResult', { error: msg });
    }
    console.log(req.body);

    Trip.create({
        origin: req.body.origin,
        destination: req.body.destination,
        value: req.body.value,
        depart_date: req.body.depart_date,
        return_date: req.body.return_date,
        gate: req.body.gate,
        number_of_changes: req.body.number_of_changes

    })
        .then(() => {
            Trip.find({})
                .then((trip) => {
                    res.render('mytrips', { trip })
                })
                .catch((err) => {
                    renderError(err.message)
                })
        })
})




//Trip.findOne({ value: req.body.value, depart_date: req.body.depart_date, origin: req.body.origin })



router.get('/delete', (req, res, next) => {
    debugger
    Trip.findByIdAndRemove(req.query.deleteId)
        .then(() => {
            res.redirect(`/mytrips`)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router


module.exports = router;