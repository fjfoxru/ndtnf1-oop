import {BooksRepository} from './models/BooksRepository';
import {buildBook} from './models/Book';

let booksRepository = new BooksRepository();
let book1 = buildBook();
console.log(book1);
booksRepository.createBook(book1);
console.log(booksRepository);