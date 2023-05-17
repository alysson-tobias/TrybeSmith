import { Request, Response } from 'express';
import UsersServices from '../services/users.services';
import { createToken } from '../auth/authToken';

export default class UserController {
  private userServices: UsersServices;

  constructor() {
    this.userServices = new UsersServices();
  }

  public addUser = async (req: Request, res: Response) => {
    const result = await this.userServices.addUser(req.body);
    const token = createToken(result);
    res.status(201).json({ token });
  };
}