import jwt from 'jsonwebtoken';

export const verifyJwt = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token JWT requis' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token JWT invalide ou expiré' });
  }
};
