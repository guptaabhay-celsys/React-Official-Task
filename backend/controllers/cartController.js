const pool = require('../config/pool');

const addToCart = async (req, res) => {
    try {
        const { userId, id, quantity, name, image, price } = req.body;

        const checkQuery = "SELECT * FROM cart WHERE user_id = $1 AND product_id = $2";
        const { rows: existingRows } = await pool.query(checkQuery, [userId, id]);

        if (existingRows.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Product already exists in the cart"
            });
        }

        const insertQuery = `
            INSERT INTO cart (user_id, product_id, quantity, name, image, price)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
        `;
        const { rows } = await pool.query(insertQuery, [userId, id, quantity, name, image, price]);
        res.status(201).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
};


const removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const query = `
            DELETE FROM cart WHERE user_id = $1 AND product_id = $2 RETURNING *;
        `;
        const { rows } = await pool.query(query, [userId, productId]);
        res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error removing product from cart' });
    }
};

module.exports = { addToCart, removeFromCart }