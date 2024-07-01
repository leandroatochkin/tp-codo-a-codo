const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('./db');

const JWT_SECRET = process.env.JWT_SECRET;

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Received login request:', email, password);

  if (!email || !password) {
    console.log('Email or password not provided');
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = results[0];
      console.log('User found:', user);

      if (password === user.password) {
        const token = jwt.sign({ id: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, user });
      } else {
        console.log('Invalid password');
        return res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      console.log('User not found for email:', email);
      return res.status(404).json({ message: 'User not found' });
    }
  });
});

module.exports = router;
