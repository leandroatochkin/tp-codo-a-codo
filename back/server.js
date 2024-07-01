require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./routes/db');

const app = express();
const port = process.env.PORT; 
const bookRoutes = require('./routes/api/books');
const favoriteRoutes = require('./routes/api/favorite_items');
const usersRoutes = require('./routes/api/users');
const searchRoutes = require('./routes/api/search');
const ordersRoutes = require('./routes/api/orders');
const orderItemsRoutes = require('./routes/api/order_items');
const authRoutes = require('./routes/auth');

// middleware
app.use(cors({
  origin: 'https://66805aabcd6edb3d7528c15a--starlit-conkies-26f234.netlify.app',
}));


app.use(bodyParser.json());

//Routes
app.use('/api/books', bookRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/order_items', orderItemsRoutes);
app.use('/api', authRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: 'Page not found' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
