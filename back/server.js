
require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')


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

  app.post('/books', (req, res) => {
    const { title, author, cover, price, category, quantity } = req.body;
    connection.query('INSERT INTO books (title, author, cover, price, category, quantity) VALUES (?, ?, ?, ?, ?, ?)', 
                     [title, author, cover, price, category, quantity], 
                     (err, result) => {
      if (err) {
        console.error("Error inserting book:", err);
        res.status(500).json({ error: 'Error inserting book' });
      } else {
        console.log("Book inserted successfully");
        res.status(200).json({ success: true });
      }
    });
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const { id, title, author, cover, price, category, quantity, bookIdNum } = req.body;
    connection.query('UPDATE books SET id = ?, title = ?, author = ?, cover = ?, price = ?, category = ?, quantity = ? WHERE id = ?', 
                     [id, title, author, cover, price, category, quantity, bookIdNum], 
                     (err, result) => {
      if (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ error: 'Error updating book' });
      } else {
        console.log("Book updated successfully");
        res.status(200).json({ success: true });
      }
    });
});

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;

  connection.query('DELETE FROM books WHERE id = ?', [bookId], (err, result) => {
      if (err) {
          console.error("Error deleting book:", err);
          res.status(500).json({ error: 'Error deleting book' });
      } else {
          console.log("Book deleted successfully");
          res.status(200).json({ success: true });
      }
  });
});

app.post('/orders', (req, res) => {
  const { userId, items } = req.body;

  // Insert new order into the orders table
  const orderQuery = 'INSERT INTO orders (user_id) VALUES (?)';
  connection.query(orderQuery, [userId], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      res.status(500).send('Error creating order');
      return;
    }

    const orderId = result.insertId;

    // Insert order items into the order_items table
    const orderItemsQuery = 'INSERT INTO order_items (order_id, book_id, quantity) VALUES ?';
    const orderItemsValues = items.map(item => [orderId, item.bookId, item.quantity]);
    connection.query(orderItemsQuery, [orderItemsValues], (err) => {
      if (err) {
        console.error('Error creating order items:', err);
        res.status(500).send('Error creating order items');
      } else {
        res.status(200).json({success: true});
      }
      
      
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

