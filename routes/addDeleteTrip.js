const express = require('express');
let router = express();
const Trip = require("../models/Trip");
const User = require("../models/User");


router.post('/add', (req, res) => {

    const renderError = (msg) => {
        console.log(msg);
        res.render('searchResult', { error: msg });
    }
    console.log(req.body);

    console.log(`User: ${JSON.stringify(req.session.user)}`);

    Trip.create({
        origin: req.body.origin,
        destination: req.body.destination,
        value: req.body.value,
        depart_date: req.body.depart_date,
        return_date: req.body.return_date,
        gate: req.body.gate,
        number_of_changes: req.body.number_of_changes,
        userId: req.session.user._id
    })
        .then((newTrip) => {
            console.log(req.session.user)
            User.findOneAndUpdate({email: req.session.user.email}, {$push: {trips: newTrip.id}})
            .catch(err => console.log(err));

            

            res.redirect('/mytrips')
        })
})




//Trip.findOne({ value: req.body.value, depart_date: req.body.depart_date, origin: req.body.origin, userId: req.session.user._id })



router.get('/delete', (req, res, next) => {
    debugger
    Trip.findByIdAndRemove(req.query.tripId)
        .then(() => {
            res.redirect(`/mytrips`)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router;