import { WishlistService } from "../services/wishlistService";
import { Request, Response } from "express";

export class WishlistController {
    private wishlistService: WishlistService;

    constructor() {
        this.wishlistService = new WishlistService();
        this.fetchItemFromWishlist = this.fetchItemFromWishlist.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
        this.removeFromWishlist = this.removeFromWishlist.bind(this);
    }

    async fetchItemFromWishlist(req: Request, res: Response) {
        try {
            const { userId } = req.query;
            if (!userId) {
                return res.status(400).json({ success: false, message: 'User ID is required' });
            }

            const items = await this.wishlistService.fetchItemFromWishlist(Number(userId));
    
            return res.status(200).json({
                success: true,
                data: items, 
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error fetching items from wishlist' });
        }
    }

    async addToWishlist(req: Request, res: Response) {
        try {
            const { userId, product_id, name, image, price } = req.body;
            if (!userId || !product_id || !name || !image || !price) {
                return res.status(400).json({ success: false, message: "Missing required fields" });
            }

            const isExistingProduct = await this.wishlistService.findProduct(userId, product_id);
    
            if (isExistingProduct) {
                return res.status(400).json({
                    success: false,
                    message: "Product already exists in the wishlist"
                });
            }

            const newWishlistItem = await this.wishlistService.addToWishlist(userId, product_id, name, image, price);
            res.status(201).json({ success: true, data: newWishlistItem });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Error adding product to wishlist' });
        }
    }

    async removeFromWishlist(req: Request, res: Response) {
        try {
            const { userId, productId } = req.body;
            if (!userId || !productId) {
                return res.status(400).json({ success: false, message: "Missing userId or productId" });
            }

            await this.wishlistService.removeFromWishlist(userId, productId);
            return res.status(200).json({ success: true, message: `Product ${productId} removed from wishlist` });
        } catch (error) {
            console.error("Error removing product from wishlist:", error);
            const errorMessage = error instanceof Error ? error.message : "Error removing product from wishlist";
            return res.status(500).json({ success: false, message: errorMessage });
        }
    }
}
