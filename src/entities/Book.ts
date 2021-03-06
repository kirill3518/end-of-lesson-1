import { Product } from './Product.js'
import { Genre } from '../types/Genre.js'

enum Type {
  NEW,
  OLD
}

export class Book extends Product<Type> {
  author: string;
  genre: Genre;

  constructor(title: string, author: string, genre: Genre, price?: number) {
    super(title, 1, Type.OLD, price);

    this.author = author;
    this.genre = genre;
  }

}