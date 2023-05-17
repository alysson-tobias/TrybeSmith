import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModels {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public async addProducts(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
    const [rows] = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    const { insertId } = rows;
    return { id: insertId, ...product };
  }

  public async allProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows;
  }
}