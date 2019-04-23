const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

//the page doesn't reload once, so we're forcing it to
router.get('/', (req, res) => {
  res.redirect('/app');
});

router.get('/app', (req, res) => {
  burger.selectAll(data => {
    res.render('index', { data });
  });
});

router.post('/app/addBurger', (req, res) => {
  burger.insertOne(req.body.burger_name, result => {
    if (result) {
      console.log(`added, redirecting`);
      res.redirect('/');
    }
  });
});

//router.put didn't work for me, but this did
router.put('/app/update', (req, res) => {
  if (req.body) {
    burger.updateOne(req.body.id, result => {
      console.log(`redirecting`);
      res.redirect('/');
    });
  } else {
    console.log(`payload not found!`);
  }
});

module.exports = router;
