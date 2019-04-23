const connection = require('./connection');

function printQuestionMarks(num) {
  let arr = [];

  for (i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(obj) {
  let arr = [];
  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function(tableInput, cb) {
    let query = `SELECT * FROM ${tableInput};`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, col, val, cb) {
    var query = 'INSERT INTO ' + tableInput;

    query += ' (';
    query += col.toString();
    query += ') ';
    query += 'VALUES (';
    query += printQuestionMarks(val.length);
    query += ') ';

    connection.query(query, val, (err, dbres) => {
      if (err) throw err;
      cb(dbres);
    });
  },
  updateOne: function(tableInput, objColVals, condition, cb) {
    var query = 'UPDATE ' + tableInput;

    query += ' SET ';
    query += objToSql(objColVals);
    query += ' WHERE ';
    query += condition;

    connection.query(query, (err, dbres) => {
      if (err) throw err;
      cb(dbres);
    });
  }
};

module.exports = orm;
