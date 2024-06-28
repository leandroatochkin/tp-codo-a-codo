const express = require('express');
const router = express.Router();
const connection = require('../db');


router.get('/', ( req, res ) => {//get books db
    connection.query('SELECT * FROM books', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

router.post('/', (req, res) => {
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

router.put('/:book_id', (req, res) => {
    const bookId = req.params.book_id; 
    const { title, author, cover, price, category, quantity } = req.body; 
  
    connection.query(
      'UPDATE books SET title = ?, author = ?, cover = ?, price = ?, category = ?, quantity = ? WHERE book_id = ?',
      [title, author, cover, price, category, quantity, bookId], 
      (err, result) => {
        if (err) {
          console.error("Error updating book:", err);
          res.status(500).json({ error: 'Error updating book' });
        } else {
          console.log("Book updated successfully");
          res.status(200).json({ success: true });
        }
      }
    );
  });

  router.delete('/book_id', (req, res) => {
    const bookId = req.params.id;
  
    connection.query('DELETE FROM books WHERE book_id = ?', [bookId], (err, result) => {
        if (err) {
            console.error("Error deleting book:", err);
            res.status(500).json({ error: 'Error deleting book' });
        } else {
            console.log("Book deleted successfully");
            res.status(200).json({ success: true });
        }
    });
  });
  

module.exports = router;