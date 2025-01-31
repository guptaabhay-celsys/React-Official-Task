const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Route Imports
const productRoutes = require('./routes/productsRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
const verifyToken = require('./auth/jwtMiddleware');

module.exports = () => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ origin: 'http://localhost:5173' }));

  // Public routes
  app.use(productRoutes);
  app.use('/user', userRoutes);

  // Protected routes
  app.use('/wishlist', verifyToken, wishlistRoutes);
  app.use('/cart',verifyToken, cartRoutes);
  app.use('/orders', verifyToken, orderRoutes);

  return app;
};
