const express = require('express');
const router = express.Router();
const faker = require('faker');
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
  if (req.body.burger_name.length > 0) {
    burger.insertOne(req.body.burger_name, result => {
      res.redirect('/app#Active');
    });
  } else {
    let getRandomName = () => {
      let tempName = faker.hacker.noun();
      return `${tempName} burger!`;
    };
    burger.insertOne(getRandomName(), result => {
      res.redirect('/app#main-gif');
      console.log(`Since a name wasn't found, randomly generated one.`);
    });
  }
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
