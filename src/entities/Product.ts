import { IProduct } from '../types/Product.js'

export class Product<T = any> implements IProduct<T> {
  title: string;
  amount: number;
  price?: number;
  type: T;
  count: number;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this.type = type;
    this.price = price;
    this.count = 0;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  canBuy(): boolean {
    return typeof this.price === 'number';
  }

  getAmount(): number {
    return this.amount;
  }

  showData(): void {
    console.log(`Продукт - ${this.title} - ${this.price}`);
  }

  Buy(count: number) {
    this.count += count;
  }

}