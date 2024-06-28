const mysql = require('mysql');
require('dotenv').config();

const password = process.env.DATABASE_PASS;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'book_store'
  });
  
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });
  
  module.exports = connection;