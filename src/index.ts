import { Book } from './book.js'
import { books } from './book-collection.js'
import { LocalStorage, getUserData, getFavoritesAmount } from './local-storage.js'

function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.pagesAmount <= pagesLimit
  }

  if (multipleRecommendations) {
    return books.filter(findAlgorithm)
  } else {
    return books.find(findAlgorithm)
  }
}

const recommendedBook = findSuitableBook('fantasy', 1000)

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name)
} else {
  console.log(recommendedBook[0].name)
}