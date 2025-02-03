import { Orders } from '../entities/orderEntity';
import { AppDataSource } from '../db.config';
import { Repository } from 'typeorm';

export class OrderService {
  private orderRepo: Repository<Orders>;

  constructor() {
    this.orderRepo = AppDataSource.getRepository(Orders);
  }

  async createOrder(user_id: number, product_id: number, quantity: number, total_price: number, billing_address: string, product_name: string, status: string) {
    const newOrder = this.orderRepo.create({
      user: { id: user_id },
      product: { id: product_id },
      quantity,
      total_price,
      billing_address,
      product_name,
      status,
    });

    return await this.orderRepo.save(newOrder);
  }

  async getAllOrders(userId: number) {
    return await this.orderRepo.find({ 
      where: { user: { id: userId } },
      relations: ["user", "product"] 
    });
  }
}
