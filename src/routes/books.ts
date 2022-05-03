import { Request, Response, Router } from 'express';
import BookController from '../controllers/BookController';
import BookModel from '../models/BookModel';
import { bookMongoModel } from '../models/schemas/BooksSchema';
import BookService from '../services/BookService';

//aqui estamos realizando as instâncias dos objetos e 
//passando as dependências por parâmetro no construtor
const bookModel = new BookModel(bookMongoModel); // ainda vamos implementar a model!!
const bookService = new BookService(bookModel); // a service recebe uma instância da model
const bookController = new BookController(bookService); // a controller recebe uma instância da service

const bookRoutes = Router();

const booksId = '/books/:id';

//para cada rota temos uma função que recebe req e res e passa para a instância do controller utulizar
bookRoutes.get('/books', (req: Request, res: Response) => bookController.getBooks(req, res));
bookRoutes.post('/books', (req: Request, res: Response) => bookController.create(req, res));
bookRoutes.put(booksId, (req: Request, res: Response) => bookController.updateBook(req, res));
bookRoutes.delete(booksId, (req: Request, res: Response) => bookController.deleteBook(req, res));
bookRoutes.get(booksId, (req: Request, res: Response) => bookController.getBook(req, res));

export default bookRoutes;