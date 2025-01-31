const express = require('express');
const { addToWishlist, removeFromWishlist, fetchItemFromWishlist } = require('../controllers/wishlistController'); 
const router = express.Router();

router.post('/add-to-wishlist', addToWishlist)
router.delete('/remove-from-wishlist', removeFromWishlist)
router.get('/products', fetchItemFromWishlist);

module.exports = router;