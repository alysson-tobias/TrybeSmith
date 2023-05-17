import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UsersModels {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public async addUser(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;

    const [users] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = users;
    return { id: insertId, username, vocation, level };
  }
}