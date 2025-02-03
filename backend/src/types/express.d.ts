import { Users } from '../entities/userEntity';

declare global {
  namespace Express {
    interface Request {
      user?: Omit<Users, 'password'>;
    }
  }
}