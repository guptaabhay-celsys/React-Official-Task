const pool = require('../config/pool');

const getAllProducts = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM products;');
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching products' });
    }
};

const updateQuantity = async (req, res) => {
    const { products } = req.body;
  
    if (!Array.isArray(products)) {
      return res.status(400).json({
        message: "Invalid products array in request body",
      });
    }

    try {
      for (const product of products) {
        const { productId, quantity } = product;
  
        const updateStockQuery = `
          UPDATE products
          SET stock = stock - $1
          WHERE id = $2 AND stock >= $1
          RETURNING stock;
        `;
        
        const result = await pool.query(updateStockQuery, [quantity, productId]);
  
        if (result.rowCount === 0) {
          return res.status(400).json({
            message: `Insufficient stock or product not found for product ID ${productId}`,
          });
        }
      }
  
      return res.status(200).json({ message: "Stock updated successfully" });
    } catch (error) {
      console.error("Error updating stock:", error);
      return res.status(500).json({ message: "Error updating stock" });
    }
  };
  
module.exports = { getAllProducts, updateQuantity };
