// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "node-complete"
// });

// module.exports = con;


 const mysql = require('mysql2');
 const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'fordatabasemanagementapp',
    password: 'root',
   
 })

 module.exports = pool.promise();