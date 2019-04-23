const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  },
  insertOne: function(bg_name, cb) {
    orm.insertOne(
      'burgers',
      ['burger_name', 'devoured'],
      [bg_name, false],
      res => {
        cb(res);
      }
    );
  },
  updateOne: function(id, cb) {
    let condition = `id=${id}`;
    orm.updateOne('burgers', { devoured: true }, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
