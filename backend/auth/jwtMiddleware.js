const jwt = require('jsonwebtoken');

const JWT_SECRET = '12345';

const verifyToken = (req, res, next) => {
  const authInfo = req.headers['authorization'];
  if (!authInfo) {
    return res.status(401).json({ message: 'Access denied. No authorization header provided.' });
  }

  const token = authInfo.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = verifyToken;
