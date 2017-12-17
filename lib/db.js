const mysql = require('mysql');
// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon"
  });

  

module.exports = connection;