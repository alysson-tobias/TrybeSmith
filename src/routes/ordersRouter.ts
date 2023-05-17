import { Router } from 'express';
import OrdersControllers from '../controllers/orders.controllers';
import validateOrders from '../middleware/validateOrders';
import validateToken from '../middleware/validateToken';

const router = Router();

const ordersControllers = new OrdersControllers();

router.get('/', ordersControllers.allOrders);
router.post(
  '/',
  validateToken.validateToken,
  validateOrders.validateOrders,
  ordersControllers.addOrder,
);

export default router;