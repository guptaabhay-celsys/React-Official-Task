const bcrypt = require('bcrypt');
const pool = require('../config/pool');
const jwt = require('jsonwebtoken');

const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingUserQuery = 'SELECT * FROM users WHERE email = $1';
        const { rowCount: emailExists } = await pool.query(existingUserQuery, [email]);

        if (emailExists > 0) {
            return res.status(400).json({ message: 'Email is already registered.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUserQuery = `
            INSERT INTO users (name, email, password, created_at, updated_at)
            VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id, name, email
        `;
        const { rows } = await pool.query(insertUserQuery, [name, email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully.', user: rows[0] });
    } catch (error) {
        console.error('Error during user signup:', error);
        res.status(500).json({ message: 'An error occurred while registering the user.' });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const getUserQuery = 'SELECT * FROM users WHERE email = $1';
        const { rows, rowCount } = await pool.query(getUserQuery, [email]);

        if (rowCount === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const user = rows[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const JWT_SECRET = '12345';

        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            message: 'Login successful.',
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'An error occurred while logging in.' });
    }
};

module.exports = { userSignup, userLogin }