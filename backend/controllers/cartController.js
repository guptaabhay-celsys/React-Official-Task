const pool = require('../config/pool');

const fetchItemFromCart = async (req, res) => {
        try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ success: false, message: 'User ID is required' });
        }

        const query = "SELECT * FROM cart WHERE user_id = $1";
        const { rows } = await pool.query(query, [userId]);

        return res.status(200).json({
            success: true,
            data: rows, 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error fetching items from wishlist' });
    }
};

const addToCart = async (req, res) => {
    try {
        let { userId, product_id, name, image, price, quantity } = req.body;

        quantity = Number(quantity) || 1;
        price = Number(price);

        if (isNaN(price) || isNaN(quantity)) {
            return res.status(400).json({
                success: false,
                message: "Invalid price or quantity format",
            });
        }

        const checkQuery = "SELECT * FROM cart WHERE user_id = $1 AND product_id = $2";
        const { rows: existingRows } = await pool.query(checkQuery, [userId, product_id]);

        if (existingRows.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Product already exists in the cart",
            });
        }

        const insertQuery = `
            INSERT INTO cart (user_id, product_id, name, image, price, quantity)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
        `;
        const { rows } = await pool.query(insertQuery, [userId, product_id, name, image, price, quantity]);
        res.status(201).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
};


const removeFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.body;
      if (!userId || !productId) {
        return res.status(400).json({ success: false, message: "Missing userId or productId" });
      }
  
      const query = `
        DELETE FROM cart
        WHERE user_id = $1 AND product_id = $2
        RETURNING *;
      `;
      const { rows } = await pool.query(query, [userId, productId]);
  
      if (rows.length === 0) {
        return res.status(404).json({ success: false, message: "Product not found in cart" });
      }
  
      res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
      console.error("Error removing product from cart:", error);
      res.status(500).json({ success: false, message: "Error removing product from cart" });
    }
  };


  const updateCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        if (!userId || !productId || quantity == null) {
            return res.status(400).json({
                success: false,
                message: "Missing userId, productId, or quantity",
            });
        }

        const query = `
            UPDATE cart
            SET quantity = $1
            WHERE user_id = $2 AND product_id = $3
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [quantity, userId, productId]);

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Product not found in cart' });
        }

        res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ success: false, message: "Error updating cart" });
    }
};
  
  

module.exports = { addToCart, removeFromCart, fetchItemFromCart, updateCart}