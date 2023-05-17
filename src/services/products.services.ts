import ProductModels from '../models/products.models';
import { IProduct } from '../interfaces';
import connection from '../models/connection';

export default class ProductsServices {
  private productsModels: ProductModels;

  constructor() {
    this.productsModels = new ProductModels(connection);
  }

  public async addProducts(product: IProduct) {
    const result = await this.productsModels.addProducts(product);
    return result;
  }

  public async allProducts(): Promise<IProduct[]> {
    const products = await this.productsModels.allProducts();
    return products;
  }
}