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

module.exports = { getAllProducts };
