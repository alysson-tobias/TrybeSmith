import { Request, Response } from 'express';
import OrdersServices from '../services/orders.services';

export default class ProductsController {
  private ordersServices: OrdersServices;

  constructor() {
    this.ordersServices = new OrdersServices();
  }

  public allOrders = async (req: Request, res: Response) => {
    const result = await this.ordersServices.allOrders();
    return res.status(200).json(result);
  };

  public addOrder = async (req: Request, res: Response) => {
    const { productIds, payload } = req.body;
    await this.ordersServices.addOrder({ userId: payload.id, productIds });
    res.status(201).json({ userId: payload.id, productIds });
  };
}