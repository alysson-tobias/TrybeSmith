import OrdersModels from '../models/orders.models';
import { IAddOrder, IOrders } from '../interfaces';
import connection from '../models/connection';

export default class OrdersServices {
  private ordersModels: OrdersModels;

  constructor() {
    this.ordersModels = new OrdersModels(connection);
  }

  public async allOrders(): Promise<IOrders[]> {
    const result = await this.ordersModels.allOrders();
    return result;
  }

  public async addOrder(order: IAddOrder) {
    const result = await this.ordersModels.addOrder(order);
    return result;
  }
}