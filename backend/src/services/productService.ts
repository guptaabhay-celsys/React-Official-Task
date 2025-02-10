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

    async filterProducts(filters: any[]) {
        let query = this.productRepo.createQueryBuilder("product");

        filters.forEach((filter: any) => {
        if (filter.items.length > 0) {
            switch (filter.type) {
            case "brand_name":
                query.andWhere("product.brand_name IN (:...brands)", { brands: filter.items });
                break;
            case "size":
                query.andWhere("EXISTS (SELECT 1 FROM unnest(product.available_sizes) size WHERE size::text IN (:...sizes))", { sizes: filter.items });
                break;
            case "color":
                query.andWhere("EXISTS (SELECT 1 FROM unnest(product.colors_available) color WHERE color IN (:...colors))", { colors: filter.items });
                break;
            case "material":
                query.andWhere("product.material IN (:...materials)", { materials: filter.items });
                break;
            case "technology":
                query.andWhere("product.technology IN (:...technologies)", { technologies: filter.items });
                break;
            }
        }
        });

        return await query.getMany();
    }
}