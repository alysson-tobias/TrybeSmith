import jwt from 'jsonwebtoken';
import LoginModels from '../models/login.models';
import { ILogin } from '../interfaces';
import connection from '../models/connection';

export default class LoginServices {
  private loginModels: LoginModels;

  public JWT = jwt;

  constructor() {
    this.loginModels = new LoginModels(connection);
  }

  public async login({ username }: ILogin) {
    const result = await this.loginModels.login(username);
    return result;
  }
}