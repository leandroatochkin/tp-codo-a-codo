const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/favorite_items', ( req, res ) => {//get favorite_items db
    connection.query('SELECT * FROM favorite_items', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });


router.post('/favorite_items', (req, res) => {
    const { user_id, book_id } = req.body;
    connection.query('INSERT INTO favorite_items (user_id, book_id) VALUES (?, ?)', 
                     [user_id, book_id], 
                     (err, result) => {
      if (err) {
        console.error("Error inserting favorite:", err);
        res.status(500).json({ error: 'Error inserting favorite' });
      } else {
        console.log("favorite inserted successfully");
        res.status(200).json({ success: true });
      }
    });
  });


  module.exports = router;