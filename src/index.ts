import { Book } from './entities/Book.js';
import { Notepad } from './entities/Notepad.js';
import { Product } from './entities/Product.js';
import { MyMap } from './common/MyMap.js'

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

const getFrom = <T extends Product<any>>(
  obj: Record<string, T>,
  title: string
): T | undefined => {
  return obj[title];
}

const main = () => {
  const map = new MyMap<string, Product>();
  console.log(1, map.getAll());

  map.set('title 1', new Book('title 1', 'author 1', 'fantasy', 5));
  console.log(2, map.getAll());

  map.set('title 2', new Notepad('title 2'));
  console.log(3, map.getAll());

  map.remove('title 2');
  console.log(4, map.getAll());

  map.set('title 2', new Notepad('title 2'));
  console.log(5, map.getAll());

  map.clear();
  console.log(6, map.getAll());

  //const books = [
  //    new Book("title 1", "author 1", "fantasy", 5),
  //    new Book("title 1", "author 2", "others"),
  //];

  //const notepads = [
  //    new Notepad("title 1", 5),
  //    new Notepad("title 1"),
  //];

  //books.forEach((book) => showData(book));
  //notepads.forEach((notepad) => showData(notepad));
}

main();

const get = <T = any, V = any>(some: T, value: V): T => {
  return some;
}


