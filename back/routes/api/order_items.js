const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', ( req, res ) => {//get order_items db
    connection.query('SELECT * FROM order_items', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });


router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    
    //query to retrieve each user's orders with corresponding details
    const query = `
        SELECT o.order_id, o.order_date, oi.book_id, oi.quantity, b.title, b.author, b.price
        FROM orders o
        JOIN order_items oi ON o.order_id = oi.order_id
        JOIN books b ON oi.book_id = b.book_id
        WHERE o.user_id = ?
    `;
    
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            res.status(500).json({ error: 'Failed to fetch user orders' });
        } else {
            res.json(results);
        }
    });
});


module.exports = router;