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
    connection.query(`SELECT * FROM ?`, { tableInput }, (err, dbres) => {
      if (err) throw err;
      cb(dbres);
    });
  }
};
