import { UserController } from '../controllers/userController';
import { Request, Response, Router } from 'express';

const router = Router();
const userController = new UserController();

router.post('/signup', async (req: Request, res: Response) => {
    try {
      await userController.userSignup(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

router.post('/login', async (req: Request, res: Response) => {
    try {
      await userController.userLogin(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

export default router;