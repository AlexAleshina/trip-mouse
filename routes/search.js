const express = require('express');
let router = express();

router.get('/search', (req, res, next) => {
    res.render('search');
    axios.get(`http://min-prices.aviasales.ru/calendar_preload?origin=BCN&destination=MOW&depart_date=${startDate.value}one_way=false`)
});



/*
router.post('/search', (req, res, next) => {
    res.render('result');
});


//axios.get(`http://min-prices.aviasales.ru/calendar_preload?origin=BCN&destination=MOW&depart_date=2014-12-01&one_way=false`)



  var startDate = document.getElementById('dateFrom');
  var endDate = document.getElementById('dateTo');
  var budget = document.getElementById('budget');
  var from = document.getElementById('fromPlace');
  var where = document.getElementById('where');
  var surprise = document.getElementById('surprise');


  startDate.addEventListener('change', filterChangedDate);
  endDate.addEventListener('change', filterChangedDate);
  budget.addEventListener('change', filterChangedDate);
  from.addEventListener('change', filterChangedDate);
  where.addEventListener('change', filterChangedDate);
  surprise.addEventListener('change', filterChangedDate);

*/





module.exports = router;