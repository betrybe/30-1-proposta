import { Model } from 'mongoose';
import { IBook } from './schemas/BooksSchema';

export default class BookModel {

    constructor(private bookModel: Model<IBook>) { }

    public async getBooks(): Promise<IBook[]> {
        const books = await this.bookModel.find();
        return books;
    }

    public async createBook(bookData: IBook): Promise<IBook> {
        const book = await this.bookModel.create(bookData);
        return book;
    }

    public async getBook(id: string): Promise<IBook | null> {
        const book = await this.bookModel.findOne({ _id: id });
        return book;
    }

    public async editBook(id: string, bookData: IBook): Promise<IBook | null> {
        const book = await this.bookModel.findOneAndUpdate(
            { _id: id },
            bookData,
            { new: true }
        );
        return book;
    }

    public async deleteBook(id: string): Promise<IBook | null> {
        const book = await this.bookModel.findOneAndDelete({ _id: id });
        return book;
    }

}