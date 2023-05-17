import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class LoginModels {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public async login(username: string) {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    const [user] = rows as IUser[];
    return user;
  }
}