import { Product } from './Product.js'

export enum Type {
  BLACK,
  RED
}

export class Notepad extends Product<Type> {
  constructor(title: string, price?: number, type: Type = Type.RED) {
    super(title, 1, type, price);
  }

  showData(): void {
    console.log(`Блокнот - ${this.title} - ${this.price}`);
  }

}