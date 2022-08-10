import { Book } from './entities/Book.js';
import { Notepad } from './entities/Notepad.js';
import { Logger } from './common/Logger.js';
import { Product } from './entities/Product.js';
// import { IBook, IOptions, search } from 'google-books-search';
import { MyMap } from './common/MyMap.js';

const main2 = () => {
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
}

main2();

const basket = new MyMap<string, Product>();
const addToBasket = (item: Product, count: number) => {
  item.Buy(count);
  basket.set('basket', item);
}

const book = new Book('book 1', 'author 1', 'fantasy', 5);
addToBasket(book, 2);
const notepad = new Notepad('notepad 1');
addToBasket(notepad, 3);

// const searchBooks = (query: string, options: IOptions = {}): Promise<IBook[]> =>
//   new Promise((resolve, reject) => {
//     search(query, options, (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     })
//   })

// const main = async () => {
//   const books = await searchBooks('Harry Poter', {
//     limit: 1,
//   });
// }

const main = () => {
  const book = new Book('title 1', 'author 1', 'fantasy', 5);

  book.addReview({
    author: 'andrey',
    text: 'text',
    score: 4
  });

  book.addReview({
    author: 'andrey',
    text: 'text',
    score: 1
  });

  Product.getInfo(book);

  Logger.info(book.reviews);
  Logger.error('some error');
};


main();