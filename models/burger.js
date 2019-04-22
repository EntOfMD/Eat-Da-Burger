const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  },
  insertOne: function(col, val, cb) {
    orm.insertOne('burgers', col, val, res => {
      cb(res);
    });
  },
  updateOne: function(objColVal, condition, cb) {
    orm.updateOne('burgers', objColVal, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
