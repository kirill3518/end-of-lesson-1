import { Product } from './Product.js'
import { Genre } from '../types/Genre.js'

export enum Type {
  NEW,
  OLD
}

export class Book extends Product<Type> {
  author: string;
  genre: Genre;

  constructor(title: string, author: string, genre: Genre, price?: number, type: Type = Type.OLD) {
    super(title, 1, type, price);

    this.author = author;
    this.genre = genre;
  }

  showData(): void {
    console.log(`Книга - ${this.title} - ${this.author} - ${this.price}`);
  }

}