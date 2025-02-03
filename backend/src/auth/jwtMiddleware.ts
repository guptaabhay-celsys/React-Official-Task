import { Users } from '../entities/userEntity';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '12345';

interface AuthRequest extends Request {
  user?: Omit<Users, 'password'>;
}

const verifyToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  const authInfo = req.headers['authorization'];
  
  if (!authInfo) {
    res.status(401).json({ message: 'No authorization header' });
    return;
  }

  const token = authInfo.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { 
      id: number;
      email: string;
      name: string;
    };
    console.log(decoded);

    req.user = {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
      password: '',
      created_at: new Date(),
      updated_at: new Date()
    } as Users;

    next();
  } catch (error) {
    console.error('JWT Error:', error);
    res.status(401).json({ message: 'Invalid/expired token' });
  }
};

export default verifyToken;