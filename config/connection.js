const mysql = require('mysql');
const keys = require('./keys');
const connection = mysql.createConnection(keys.mysql);

connection.connect(err => {
  if (err) {
    console.error(`Error Connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected to database succesfully`);
});

module.exports = connection;
