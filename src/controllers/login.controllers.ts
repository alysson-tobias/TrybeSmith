import { Request, Response } from 'express';
import { createToken } from '../auth/authToken';
import LoginServices from '../services/login.services';

export default class LoginControllers {
  private loginServices: LoginServices;

  constructor() {
    this.loginServices = new LoginServices();
  }

  public login = async (req: Request, res: Response) => {
    const { password } = req.body;
    const result = await this.loginServices.login(req.body);
    if (!result) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    if (result.password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = createToken(result);
    res.status(200).json({ token });
  };
}