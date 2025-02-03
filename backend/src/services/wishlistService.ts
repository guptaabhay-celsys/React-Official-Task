import { AppDataSource } from "../db.config";
import { Repository } from "typeorm";
import { Wishlist } from "../entities/wishlistEntity";

export class WishlistService {
    private wishlistRepo: Repository<Wishlist>;

    constructor() {
        this.wishlistRepo = AppDataSource.getRepository(Wishlist);
    }

    async fetchItemFromWishlist(userId: number) {
        return await this.wishlistRepo.find({ 
            where: { user: { id: userId } },
            relations: ["user", "product"],
         });
    }

    async addToWishlist(userId: number, product_id: number, name: string, image: string, price: number) {
        const wishlistItem = this.wishlistRepo.create({
            user: { id: userId },
            product: { id: product_id },
            name,
            image,
            price,
        });

        return await this.wishlistRepo.save(wishlistItem);
    }

    async findProduct(userId: number, productId: number) {
        return await this.wishlistRepo.findOne({ where: { user: { id: userId }, product: { id: productId } } });
    }

    async removeFromWishlist(userId: number, productId: number) {
        const existingProduct = await this.findProduct(userId, productId);

        if (!existingProduct) {
            throw new Error("Product not found in wishlist");
        }

        return await this.wishlistRepo.remove(existingProduct);
    }
}