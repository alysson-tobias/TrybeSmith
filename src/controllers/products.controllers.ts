import { Request, Response } from 'express';
import ProductsServices from '../services/products.services';

export default class ProductsController {
  private productsServices: ProductsServices;

  constructor() {
    this.productsServices = new ProductsServices();
  }

  public addProducts = async (req: Request, res: Response) => {
    const result = await this.productsServices.addProducts(req.body);
    return res.status(201).json(result);
  };

  public allProducts = async (req: Request, res: Response) => {
    const products = await this.productsServices.allProducts();
    return res.status(200).json(products);
  };
}