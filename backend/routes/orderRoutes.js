const express = require('express');
const { createOrder, getAllOrders } = require('../controllers/ordersController'); 
const router = express.Router();

router.post('/place-order', createOrder);
router.get('/products', getAllOrders)

module.exports = router;