import { Product } from './Product.js'

export class Notepad extends Product {
  title: string;

  constructor(title: string, price?: number) {
    super();
    this.title = title;
    this.price = price;
  }

  canBay(): boolean {
    return typeof this.price === 'number'
  }
}