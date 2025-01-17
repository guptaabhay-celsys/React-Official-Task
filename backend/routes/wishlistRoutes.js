const express = require('express');
const { addToWishlist, removeFromWishlist, checkWishlistStatus, fetchItemFromWishlist } = require('../controllers/wishlistController'); 
const router = express.Router();

router.post('/add-to-wishlist', addToWishlist)
router.post('/remove-from-wishlist', removeFromWishlist)
router.get('/check-wishlist-status', checkWishlistStatus);
router.get('/products', fetchItemFromWishlist);

module.exports = router;