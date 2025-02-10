import { Request, Response, Router } from "express";
import { ProductsController } from '../controllers/productsController'
const router = Router();

const productsController = new ProductsController();

router.get('/products', async (req: Request, res: Response) => {
    try {
      await productsController.getAllProducts(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  })

router.post('/products/filter', async (req: Request, res: Response) => {
  try {
    await productsController.filterProducts(req, res);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
})

router.post('/update-quantity', async (req: Request, res: Response) => {
    try {
      await productsController.updateQuantity(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  })

export default router;