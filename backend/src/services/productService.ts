import { AppDataSource } from '../db.config'; 
import { Products } from '../entities/productEntity';
import { Repository } from 'typeorm';

export class ProductService {
    private productRepo: Repository<Products>;

    constructor() {
        this.productRepo = AppDataSource.getRepository(Products);
    }

    async getAllProducts() {
        return await this.productRepo.find();
    }

    async updateQuantity(quantity: number, productId: number) {
        const product = await this.productRepo.findOne({ where: { id: productId } });
        if (!product) {
        throw new Error(`Product with ID ${productId} not found`);
    }

    product.stock -= quantity;
        return await this.productRepo.save(product);
    }
}