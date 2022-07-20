import { Product } from './Product.js'

enum Type {
  BLACK,
  RED
}

export class Notepad extends Product<Type> {
  constructor(title: string, price?: number) {
    super(title, 1, Type.RED, price);
  }

  showData(): void {
    console.log(`Блокнот - ${this.title} - ${this.price}`);
  }

}