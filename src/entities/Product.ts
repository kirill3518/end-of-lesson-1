import { IProduct } from '../types/Product.js'
import { Review } from '../types/Review';

export class Product<T = any> {
  public title: string;
  public amount: number;
  public count: number;

  protected _type: T;
  protected price?: number;

  private _reviews: Review[] = [];
  private _score = 0;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this._type = type;
    this.price = price;
    this.count = 0;
  }

  get score() {
    return this._score;
  }

  get reviews(): Readonly<Review[]> {
    return this._reviews;
  }

  get type(): T {
    return this._type;
  }

  getPrice(): number | undefined {
    return this.price;
  }
  getAmount(): number {
    return this.amount;
  }
  canBuy(): boolean {
    return typeof this.price === 'number';
  }

  showData(): void {
    console.log(`Продукт - ${this.title} - ${this.price}`);
  }

  Buy(count: number) {
    this.count += count;
  }

  addReview(review: Review) {
    this._reviews.push(review);
    this._score = this._reviews.reduce<number>((score, review) => {
      return score + review.score;
    }, 0) / this._reviews.length;
  }

  static getInfo(product: Product) {
    console.log('getInfo Product');
    console.log(product.title, product.amount);
  }

}