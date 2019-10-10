const express = require('express');
let router = express();
const axios = require('axios');
//const token = 'd4fa770c84d2f5c465fd9ab6e407f21e';

router.get('/search', (req, res, next) => {
    const { surprise, fromPlace, minDays, maxDays, currency } = req.query;

    if (surprise === 'on' && fromPlace && minDays && maxDays) {
        console.log('searching...');
        result = axios.get(`http://map.aviasales.ru/prices.json?origin_iata=${fromPlace}&period=year&direct=true&one_way=false&min_trip_duration_in_days=${minDays}&max_trip_duration_in_days=${maxDays}&currency=${currency}`)
            .then(result => {
                
                //console.log(result.data);
                let data = result.data
                res.render('searchResult', {data})
            })
            .catch(err => {
            })
        //res.send(`Searching flights with params: ${JSON.stringify(req.query)} (with surprise)`);
    } else {
        next();
    }
})

router.get('/search', (req, res, next) => {
    const { surprise, fromPlace, toPlace, dateFrom, currency } = req.query;

    if (fromPlace && toPlace && dateFrom) {
        console.log('searching...');
        result = axios.get(` http://min-prices.aviasales.ru/calendar_preload?origin=${fromPlace}&destination=${toPlace}&depart_date=${dateFrom}&currency=${currency}`)
            .then(result => {

                let data = result.data.best_prices;
                res.render('searchResult', {data})
            })
            .catch(err => {
            })
        //res.send(`Searching flights with params: ${JSON.stringify(req.query)} (with surprise)`);
    }
    else {
        next();
    }
})


router.get('/search', (req, res, next) => {
    res.render('search', req.query);
});









/*
router.get('/search', (req, res, next) => {

    const { surprise, dateFrom, dateTo, maxBudget, fromPlace } = req.query;

    if (surprise === "on" && dateFrom && dateTo && fromPlace) {
        res.send(`Searching flights with params: ${JSON.stringify(req.query)} (with surprise)`);
    } else {
        next();
    }

    //res.render('search');
    //axios.get(`http://min-prices.aviasales.ru/calendar_preload?origin=BCN&destination=MOW&depart_date=${startDate.value}one_way=false`)
});

router.get('/search', (req, res, next) => {
    const { dateFrom, dateTo, maxBudget, fromPlace, toPlace } = req.query;

    if (dateFrom && fromPlace && toPlace) {
        console.log('searching...');
        axios.get(`http://min-prices.aviasales.ru/calendar_preload??origin=${fromPlace}&destination=${toPlace}&depart_date=${dateFrom}`)
        //axios.get(`https://api.travelpayouts.com/v1/prices/direct?origin=${fromPlace}&destination=${toPlace}&depart_date=${dateFrom}&return_date=${dateTo}&currency=EUR&token=${token}`)
        //axios.get(`https://api.travelpayouts.com/v1/prices/calendar?depart_date=${dateFrom}&return_date=${dateTo}&origin=${fromPlace}&destination=${toPlace}&calendar_type=departure_date&currency=EUR&token=${token}`)
            .then(response => {
                //const items = Object.values(result.data.data[toPlace]);
                console.log(response);

                res.render('searchResult', {items})
            })
            .catch(err => {
                
            })


        res.send(`Searching flights with params: ${JSON.stringify(req.query)} (no surprise)`);
    } else {
        next();
    }

});

router.get('/search', (req, res, next) => {
    res.render('search', req.query);
});
 
*/

/*
router.post('/search', (req, res, next) => {
    res.render('result');
});

//axios.get(`http://min-prices.aviasales.ru/calendar_preload?origin=BCN&destination=MOW&depart_date=2014-12-01&one_way=false`)

  var startDate = document.getElementById('dateFrom');
  var endDate = document.getElementById('dateTo');
  var budget = document.getElementById('maxBudget');
  var from = document.getElementById('fromPlace');
  var where = document.getElementById('toPlace');
  var surprise = document.getElementById('surprise');

  startDate.addEventListener('change', filterChangedDate);
  endDate.addEventListener('change', filterChangedDate);
  budget.addEventListener('change', filterChangedDate);
  from.addEventListener('change', filterChangedDate);
  where.addEventListener('change', filterChangedDate);
  surprise.addEventListener('change', filterChangedDate);

*/

module.exports = router;