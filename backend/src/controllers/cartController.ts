import { CartService } from "../services/cartService";
import { Request, Response } from "express";

export class CartController {
    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
        this.fetchItemFromCart = this.fetchItemFromCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }

    async fetchItemFromCart(req: Request, res: Response) {
        try {
            const { userId } = req.query;
            if (!userId || isNaN(Number(userId))) {
                return res.status(400).json({ success: false, message: 'Valid User ID is required' });
            }

            const items = await this.cartService.fetchItemFromCart(Number(userId));

            return res.status(200).json({ success: true, data: items });
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'Error fetching items from cart';
            return res.status(500).json({ success: false, message: errorMessage });
        }
    }

    async addToCart(req: Request, res: Response) {
        try {
            let { userId, product_id, name, image, price, quantity } = req.body;
            console.log(product_id);

            quantity = Number(quantity) || 1;
            price = Number(price);

            if (isNaN(price) || isNaN(quantity)) {
                return res.status(400).json({ success: false, message: "Invalid price or quantity format" });
            }

            const isExistingProduct = await this.cartService.findProduct(userId, product_id);

            if (isExistingProduct) {
                return res.status(400).json({ success: false, message: "Product already exists in the cart" });
            }

            const newCartItem = await this.cartService.addToCart(userId, product_id, name, image, price, quantity);

            return res.status(201).json({ success: true, data: newCartItem });
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'Error adding product to cart';
            return res.status(500).json({ success: false, message: errorMessage });
        }
    }

    async removeFromCart(req: Request, res: Response) {
        try {
            const { userId, productId } = req.body;
            if (!userId || !productId) {
                return res.status(400).json({ success: false, message: "Missing userId or productId" });
            }

            await this.cartService.removeFromCart(userId, productId);
            return res.status(200).json({ success: true, message: `Product ${productId} removed from cart` });
        } catch (error) {
            console.error("Error removing product from cart:", error);
            const errorMessage = error instanceof Error ? error.message : "Error removing product from cart";
            return res.status(500).json({ success: false, message: errorMessage });
        }
    }

    async updateCart(req: Request, res: Response) {
        try {
            const { userId, productId, quantity } = req.body;

            if (!userId || !productId || quantity == null) {
                return res.status(400).json({ success: false, message: "Missing userId, productId, or quantity" });
            }

            const updatedProduct = await this.cartService.updateCart(quantity, userId, productId);

            return res.status(200).json({ success: true, data: updatedProduct });
        } catch (error) {
            console.error("Error updating cart:", error);
            const errorMessage = error instanceof Error ? error.message : "Error updating cart";
            return res.status(500).json({ success: false, message: errorMessage });
        }
    }
}
