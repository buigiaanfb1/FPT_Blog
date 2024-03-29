const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Authorized denied' });
  }
  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.admin = decoded.admin;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
