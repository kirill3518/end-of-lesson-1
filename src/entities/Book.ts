import { Product } from './Product.js'
import { Genre } from '../types/Genre.js'

export class Book extends Product {
  title: string;
  author: string;
  genre: Genre;

  constructor(title: string, author: string, genre: Genre, price?: number) {
    super();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }

  canBay(): boolean {
    return typeof this.price === 'number'
  }
}