const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/search', (req, res) => {
    let searchQuery = req.query.q;
    let sql = `SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR category LIKE ?`;
    let query = `%${searchQuery}%`;
    connection.query(sql, [query, query, query], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
  });

  module.exports = router;