import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/authToken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const payload = verifyToken(authorization);

    req.body.payload = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default {
  validateToken,
};