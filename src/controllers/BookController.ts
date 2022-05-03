import { Request, Response } from 'express';
import BookService from '../services/BookService';

export default class BookController {

    private notFound = 'Book not found';
    private internalError = 'Internal server error';

    constructor(private bookService: BookService) { }

    public async getBooks (_req: Request, res: Response): Promise<Response> {
        try {
            const books = await this.bookService.getBooks();
            return res.status(200).send(books);
        } catch (err: unknown) {
            return res.status(500).send({ message: this.internalError });
        }
    };

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const book = await this.bookService.createBook(req.body);
            return res.status(201).send(book);
        } catch (err: unknown) {
            return res.status(500).send({ message: this.notFound });
        }
    };

    public async getBook(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const book = await this.bookService.getBook(id);
            if (book) {
                return res.status(200).send(book);
            }
            return res.status(404).send({ message: this.notFound });
        } catch (err: unknown) {
            return res.status(500).send({ message: this.internalError });
        }
    };

    public async updateBook(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const book = await this.bookService.updateBook(id, req.body);
            if (book) {
                return res.status(200).send(book);
            }
            return res.status(404).send({ message: this.notFound });
        } catch (err: unknown) {
            return res.status(500).send({ message: this.internalError });
        }
    };

    public async deleteBook(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const book = await this.bookService.deleteBook(id);
            if (book) {
                return res.status(200).send(book);
            }
            return res.status(404).send({ message: this.notFound });
        } catch (err: unknown) {
            return res.status(500).send({ message: this.internalError });
        }
    };
}