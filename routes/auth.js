const express = require('express');
let router = express();
const bcrypt = require('bcryptjs');
const User = require("../models/User");

//sign up
//crearte sending message
router.get('/signup', (req, res, next) => {
  //if logged in already - redirect to search
  res.render('signup');
});

router.post('/signup', (req, res) => {
  const renderError = (msg) => {
    console.log(msg); 
    res.render('signup', { error: msg });
  }
  console.log(req.body);

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) renderError('User is alredy exist')
      else {
        //create new user
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          if (err) renderError(err.message)
          else {
            User.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              phone: req.body.phone,
              email: req.body.email,
              passwordHash: hash
            })
              .then(() => {
                res.redirect('/login')
              })
              .catch((err) => {
                renderError(err.message)
              })
          }
        })
      }
    })
})



//login
router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  // 1. Check login name / password 
  // 2. If correct, save the user to the seesion
  // See https://github.com/Piepongwong/auth-b6/blob/master/routes/auth.js for example
  // and https://github.com/Piepongwong/auth-b6/blob/be3e5c8511cf495bca25d12107be29b28ef58aaf/app.js#L17 
  res.render('mytrips');
});


router.post("/login", (req,res)=> {
  User.findOne({email: req.body.email})
      .then((user)=> {
          if(!user) res.json({loggedIn: false}) // this is different
          else {
              bcrypt.compare(req.body.password, user.password, function(err, equal) {
                  if(err) res.send(err);
                  else if(!equal) res.json({loggedIn: false}); // this is different
                  else {
                      req.session.user = user;
                      res.json({loggedIn: true}); // this is different
                  }
              });
          }
      })
      .catch(err=> {
          res.send("error erropr", err);
      })
})

//logout
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

