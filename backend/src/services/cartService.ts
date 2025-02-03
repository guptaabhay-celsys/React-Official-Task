import { AppDataSource } from "../db.config";
import { Repository } from "typeorm";
import { Cart } from "../entities/cartEntity";

export class CartService {
    private cartRepo: Repository<Cart>;

    constructor() {
        this.cartRepo = AppDataSource.getRepository(Cart);
    }

    async fetchItemFromCart(userId: number) {
        const products = await this.cartRepo.find({ 
            where: { user: { id: userId } },
            relations: ["user", "product"],
        });
        console.log(products);
        return products;
    }

    async addToCart(userId: number, product_id: number, name: string, image: string, price: number, quantity: number) {
        const cartItem = this.cartRepo.create({
            user: { id: userId },
            product: { id: product_id },
            name,
            image,
            price,
            quantity,
        });

        return await this.cartRepo.save(cartItem);
    }

    async findProduct(userId: number, productId: number) {
        return await this.cartRepo.findOne({ where: { user: { id: userId }, product: { id: productId } } });
    }

    async removeFromCart(userId: number, productId: number) {
        const existingProduct = await this.findProduct(userId, productId);

        if (!existingProduct) {
            throw new Error("Product not found in cart");
        }

        return await this.cartRepo.remove(existingProduct);
    }

    async updateCart(quantity: number, userId: number, productId: number) {
        const existingProduct = await this.findProduct(userId, productId);

        if (!existingProduct) {
            throw new Error("Product not found in cart");
        }

        existingProduct.quantity = quantity;

        return await this.cartRepo.save(existingProduct);
    }
}