const express = require("express");
const db = require('../models');
const router = express.Router();

  // send homepage
  router.get('/', (req, res) => {
    res.render('index');
  })

  // send create login page
  router.get('/create', (req, res) => {
    res.render('create');
  })

  // send highscore page
  router.get('/highscores', (req, res) => {
    res.render('highscores');
  })

// send game setup page
router.get('/usersetup', (req, res) => {
  console.log('query paramater:', req.query.name)
  db.Account.findOne({
    raw: true,
    where: {
      name: req.query.name
    }
  }).then(dbUser => {
    console.log(dbUser, "userdata")
    res.render('usersetup', dbUser);
  })
})


  // send game
  router.get('/launch', (req, res) => {
    res.render('game')
  })

  module.exports = router;

// THESE ROUTES DO NOT WORK YET, WAITING ON HANDLEBARS PAGES