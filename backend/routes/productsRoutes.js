const express = require('express');
const { getAllProducts, updateQuantity } = require('../controllers/productsController'); 
const router = express.Router();

router.get('/products', getAllProducts)
router.post('/update-quantity', updateQuantity)

module.exports = router;