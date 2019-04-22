const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll(data => {
    // let testObj = {
    //   burgers: data }
    // console.log(testObj);
    // res.render('index', testObj);
    res.render('index', { data });
  });
});

router.post('/addBurger', (req, res) => {
  burger.create(req.body.new_burger, result => {
    console.log(result);
  });
});

router.put('/update', (req, res) => {
  burger.updateOne(req.body.id, result => {
    console.log(result);
  });
});

module.exports = router;
