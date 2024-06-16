// middleware/auth.js

import jwt from 'jsonwebtoken';
const JWT_SECRET = 'dkjbsd4e43f28c28#!kjbnb1kjb11';

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers?.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.schoolId = decoded.id; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { verifyToken };
