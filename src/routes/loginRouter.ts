import { Router } from 'express';
import LoginControllers from '../controllers/login.controllers';
import validateLogin from '../middleware/validateLogin';

const router = Router();

const loginControllers = new LoginControllers();

router.post('/', validateLogin, loginControllers.login);

export default router;