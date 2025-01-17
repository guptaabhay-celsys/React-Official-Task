const express = require('express');
const { addToCart, removeFromCart } = require('../controllers/cartController'); 
const router = express.Router();

router.post('/add-to-cart', addToCart)
router.post('/remove-from-cart', removeFromCart)

module.exports = router;