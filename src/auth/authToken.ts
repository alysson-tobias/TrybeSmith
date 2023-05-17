import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export const createToken = (user: IUser) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  return jwt.sign(payload, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
};

export const verifyToken = (token: string) => jwt.verify(token, secret);