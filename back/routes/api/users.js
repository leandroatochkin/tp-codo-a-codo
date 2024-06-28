const express = require('express');
const router = express.Router();
const connection = require('../db');


router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    connection.query('SELECT * FROM users WHERE user_id = ?', userId, (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(results[0]);
      }
    });
  });


router.get('/', ( req, res ) => {//get users db
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

router.post('/', (req, res) => {
    const { username, email, password, address, role } = req.body;
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

module.exports = router;