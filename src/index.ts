import { Book } from './entities/Book.js';
import { Notepad } from './entities/Notepad.js';
import { Product } from './entities/Product.js';
import { MyMap } from './common/MyMap.js'

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

  // map.clear();
  // console.log(6, map.getAll());

  const o = map.getAll();
  for (const key in o) {
    console.log(key, ':', o[key]);
    o[key].showData();
  }

  const basket = new MyMap<string, Product>();
  const book = new Book('book 1', 'author 1', 'fantasy', 5);
  book.Buy(3);
  map.set('basket 1', book);
  const notepad = new Notepad('notepad 1');
  notepad.Buy(2);
  map.set('basket 2', notepad);

}

main();

const get = <T = any, V = any>(some: T, value: V): T => {
  return some;
}


