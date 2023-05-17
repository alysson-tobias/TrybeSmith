import { Router } from 'express';
import UsersControllers from '../controllers/users.controllers';
import {
  validationLevel,
  validationPassword,
  validationUsername,
  validateVocation,
} from '../middleware/validateUsers';

const router = Router();

const usersControllers = new UsersControllers();

router.post(
  '/',
  validateVocation,
  validationUsername,
  validationLevel,
  validationPassword,
  usersControllers.addUser,
);

export default router;