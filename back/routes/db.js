const mysql = require('mysql');
require('dotenv').config();

const password = process.env.DATABASE_PASS;
const host = process.env.DATABASE_HOST;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
  });
  
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });
  
  module.exports = connection;