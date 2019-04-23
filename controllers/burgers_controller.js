const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll(data => {
    res.render('index', { data });
  });
});

router.post('/addBurger', (req, res) => {
  burger.insertOne(req.body.bg_name, result => {
    console.log(result);
  });
});

router.post('/update', (req, res) => {
  if (req.body) {
    console.log(req.body);
    burger.updateOne(req.body.id, result => {
      console.log(result);
    });
  } else {
    console.log(`payload not found!`);
  }
});

module.exports = router;
