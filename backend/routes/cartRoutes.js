const express = require('express');
const { addToCart, removeFromCart, fetchItemFromCart, updateCart } = require('../controllers/cartController'); 
const router = express.Router();

router.post('/add-to-cart', addToCart)
router.delete('/remove-from-cart', removeFromCart)
router.get('/products', fetchItemFromCart)
router.post('/update-cart', updateCart)

module.exports = router;