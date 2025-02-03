import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';

export class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
    this.createOrder = this.createOrder.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
  }

  async createOrder(req: Request, res: Response) {
    const { user_id, product_id, quantity, total_price, billing_address, product_name, status } = req.body;

    if (!user_id || !product_id || !quantity || !total_price || !billing_address || !product_name || !status) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const newOrder = await this.orderService.createOrder(user_id, product_id, quantity, total_price, billing_address, product_name, status);

      return res.status(201).json({
        message: 'Order created successfully.',
        order: newOrder,
      });
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).json({ error: 'An error occurred while creating the order.' });
    }
  }

  async getAllOrders(req: Request, res: Response) {
    try {
      const { userId } = req.query;
      if (!userId) {
          return res.status(400).json({ success: false, message: 'User ID is required' });
      }

      const orders = await this.orderService.getAllOrders(Number(userId));

      if (orders.length === 0) {
        return res.status(404).json({ message: 'No orders found.' });
      }

      return res.status(200).json({
        message: 'Orders fetched successfully.',
        orders,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ error: 'An error occurred while fetching the orders.' });
    }
  }
}
