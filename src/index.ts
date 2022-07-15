import { Book } from './entities/Book.js';
import { Notepad } from './entities/Notepad.js';
import { IBook } from './types/Book.js'

const showData = (entity: unknown): void => {
  if (entity instanceof Book) {
    console.log(`Книга - ${entity.title} - ${entity.author} - ${getPrice(entity)}`)
  } else if (entity instanceof Notepad) {
    console.log(`Блокнот - ${entity.title} - ${getPrice(entity)}`)
  }
};

const getPrice = (entity: Book | Notepad): string => {
  return entity.price ? entity.price.toString() : 'не продается'
}

const main = () => {
  const book: IBook = {
    author: {
      name: 'dfsdsv',
      age: 32
    },
    title: 'ssdf',
    price: 5

  }

  const books = [
    new Book('title 1', 'author 1', 'fantasy', 5),
    new Book('title 1', 'author 2', 'others'),
  ];

  const notepads = [
    new Notepad('title 1', 5),
    new Notepad('title 1'),
  ];

  books.forEach((book) => showData(book));
  notepads.forEach((notepad) => showData(notepad));
}

main();
