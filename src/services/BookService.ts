import BookModel from '../models/BookModel';
import { IBook } from '../models/schemas/BooksSchema';

export default class BookService {

    constructor(private bookModel: BookModel) { }

    public async getBooks(): Promise<IBook[]> {
        const books = await this.bookModel.getBooks();
        return books;
    }

    public async createBook(bookData: IBook): Promise<IBook> {
        const book = await this.bookModel.createBook(bookData);
        return book;
    }

    public async getBook(id: string): Promise<IBook | null> {
        const data = await this.bookModel.getBook(id);
        return data;
    }

    public async updateBook(id: string, bookData: IBook): Promise<IBook | null> {
        const data = await this.bookModel.editBook(id, bookData);
        return data;
    }

    public async deleteBook(id: string): Promise<IBook | null> {
        const data = await this.bookModel.deleteBook(id);
        return data;
    }
}
