import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';
import { validationAmount, validationName } from '../middleware/validateProducts';

const router = Router();

const productsControllers = new ProductsController();

router.post('/', validationName, validationAmount, productsControllers.addProducts);
router.get('/', productsControllers.allProducts);

export default router;