
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT;
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


app.use(cors({
    origin: 'http://localhost:5500',
}))

app.use(bodyParser.json());



app.get('/books', ( req, res ) => {//get books db
  connection.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    const result = res.json(results)
    console.log(result)
  });
});

app.get('/users', ( req, res ) => {//get users db
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

app.options('/users', cors())

app.post('/users', (req, res) => {
    const { username, email, password, address, role } = req.body;
    console.log('request body', req.body)
    connection.query('INSERT INTO users (username, email, password, address, role) VALUES (?, ?, ?, ?, ?)', 
                     [username, email, password, address, role], 
                     (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: 'Error inserting user' });
      } else {
        console.log("User inserted successfully");
        res.status(200).json({ success: true });
      }
    })
    console.log('request body', req.body);
  });




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
