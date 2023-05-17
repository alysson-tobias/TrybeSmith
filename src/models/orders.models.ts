import { RowDataPacket } from 'mysql2';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IAddOrder, IOrders } from '../interfaces';

export default class OrdersModels {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public async allOrders(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT  orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders JOIN Trybesmith.products 
      ON products.order_id = orders.id GROUP BY orders.id`,
    );
    return rows;
  }

  public async addOrder(order: IAddOrder) {
    console.log(order);
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [order.userId],
    );
 
    order.productIds.map((item) => this.connection.query(
      `UPDATE Trybesmith.products
    SET order_id = ?
    WHERE id = ?`,
      [insertId, item],
    ));
  }
}