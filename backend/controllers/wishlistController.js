const pool = require('../config/pool');

const fetchItemFromWishlist = async (req, res) => {
 
    try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ success: false, message: 'User ID is required' });
        }

        const query = "SELECT * FROM wishlist WHERE user_id = $1";
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


const checkWishlistStatus = async (req, res) => {
    try {
        const { userId, productId } = req.query;
        const query = "SELECT * FROM wishlist WHERE user_id = $1 AND product_id = $2";
        const { rows } = await pool.query(query, [userId, productId]);

        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error checking wishlist status' });
    }
};
  

const addToWishlist = async (req, res) => {
    try {
        const { userId, id, name, image, price } = req.body;

        const checkQuery = "SELECT * FROM wishlist WHERE user_id = $1 AND product_id = $2";
        const { rows: existingRows } = await pool.query(checkQuery, [userId, id]);

        if (existingRows.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Product already exists in the wishlist"
            });
        }

        const insertQuery = `
            INSERT INTO wishlist (user_id, product_id, name, image, price, created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *;
        `;
        const { rows } = await pool.query(insertQuery, [userId, id, name, image, price]);
        res.status(201).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding product to wishlist' });
    }
};


const removeFromWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const query = `
            DELETE FROM wishlist WHERE user_id = $1 AND product_id = $2 RETURNING *;
        `;
        const { rows } = await pool.query(query, [userId, productId]);
        res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error removing product from wishlist' });
    }
};


module.exports = { addToWishlist, removeFromWishlist, checkWishlistStatus, fetchItemFromWishlist }