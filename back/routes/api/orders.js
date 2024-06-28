const express = require('express');
const router = express.Router();
const connection = require('../db');


router.get('/', ( req, res ) => {//get orders db
    connection.query('SELECT * FROM orders', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

router.post('/', (req, res) => {
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
  

  module.exports = router;