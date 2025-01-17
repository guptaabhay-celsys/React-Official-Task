const pool = require('../config/pool');

const createTables = async () => {
    const {rows} = await pool.query('SELECT * FROM products;');
    console.log(rows);
}

module.exports = { createTables };