import {IBook} from './Book';

export class BooksRepository {
    allBooks: IBook[];
    constructor() {
        this.allBooks = [];
    }
    createBook(book: IBook): void {
        this.allBooks.push(book);
    }
    getBook(id: string): IBook {
        return this.allBooks.find(book => book.id === id);
    }
    getBooks(): IBook[] {
        return this.allBooks;
    }
    updateBook(id: string, book: IBook): void {
        let findBook = this.allBooks.findIndex(book => book.id === id);
        if (findBook !== -1) {
            this.allBooks[findBook] = book;
        }
    }
    deleteBook(id: string): void {
        let findBook = this.allBooks.findIndex(book => book.id === id);
        this.allBooks.slice(findBook, 1);
    }
}