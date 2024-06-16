// middleware/auth.js

import jwt from 'jsonwebtoken';
const JWT_SECRET = 'dkjbsd4e43f28c28#!kjbnb1kjb11'; // Replace with a strong, random secret key

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.schoolId = decoded.id; // Attach schoolId to request object for later use
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { verifyToken };
