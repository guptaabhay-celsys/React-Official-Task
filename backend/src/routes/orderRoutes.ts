import { Router, Response, Request } from "express";
import { OrderController } from "../controllers/ordersController";
const router = Router();

const orderController = new OrderController();

router.post('/place-order', async (req: Request, res: Response) => {
    try {
      await orderController.createOrder(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });
  
router.get('/products', async (req: Request, res: Response) => {
    try {
      await orderController.getAllOrders(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  })

export default router;