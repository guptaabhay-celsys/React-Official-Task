import { Router, Request, Response } from "express";
import { CartController } from "../controllers/cartController"; 
export const router = Router();

const cartController = new CartController();

router.post('/add-to-cart', async (req: Request, res: Response) => {
    try {
      await cartController.addToCart(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

router.delete('/remove-from-cart', async (req: Request, res: Response) => {
    try {
      await cartController.removeFromCart(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

router.get('/products', async (req: Request, res: Response) => {
    try {
      await cartController.fetchItemFromCart(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });
  
router.post('/update-cart', async (req: Request, res: Response) => {
    try {
      await cartController.updateCart(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

export default router;