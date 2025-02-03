import { Router, Request, Response } from 'express';
import { WishlistController } from '../controllers/wishlistController'
const router = Router();

const wishlistController = new WishlistController();

router.post('/add-to-wishlist', async (req: Request, res: Response) => {
    try {
      await wishlistController.addToWishlist(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  })
  
router.delete('/remove-from-wishlist', async (req: Request, res: Response) => {
    try {
      await wishlistController.removeFromWishlist(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  })

router.get('/products', async (req: Request, res: Response) => {
    try {
      await wishlistController.fetchItemFromWishlist(req, res);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

export default router;