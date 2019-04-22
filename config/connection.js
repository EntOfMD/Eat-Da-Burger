const mysql = require('mysql');
const keys = require('./keys');
const connection = mysql.createConnection({
  host: keys.mysql.Host,
  port: 3306,
  user: keys.mysql.User,
  password: keys.mysql.Pass,
  database: keys.mysql.DB
});

connection.connect(err => {
  if (err) {
    console.error(`Error Connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected to database succesfully`);
});

module.exports = connection;
