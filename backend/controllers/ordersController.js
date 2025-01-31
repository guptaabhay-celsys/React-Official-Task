const pool = require('../config/pool');

const createOrder = async (req, res) => {
  const {
    user_id,
    product_id,
    quantity,
    total_price,
    billing_address,
    product_name,
    status,
  } = req.body;

  if (
    !user_id ||
    !product_id ||
    !quantity ||
    !total_price ||
    !billing_address ||
    !product_name ||
    !status
  ) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const query = `
      INSERT INTO orders (
        user_id,
        product_id,
        quantity,
        total_price,
        billing_address,
        product_name,
        status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `;

    const values = [
      user_id,
      product_id,
      quantity,
      total_price,
      billing_address,
      product_name,
      status,
    ];

    const result = await pool.query(query, values);

    res.status(201).json({
      message: 'Order created successfully.',
      order: result.rows[0],
    });
  } catch (error) {
    console.error('Error inserting order:', error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};

const getAllOrders = async (req, res) => {
    try {
      const query = 'SELECT * FROM orders';
      const { rows } = await pool.query(query);
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'No orders found.' });
      }
  
      res.status(200).json({
        message: 'Orders fetched successfully.',
        orders: rows,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'An error occurred while fetching the orders.' });
    }
  };
  
  module.exports = {
    createOrder,
    getAllOrders,
  };
