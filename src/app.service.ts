import { Injectable } from '@nestjs/common';
import { Book, books } from './sampleData';

@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }

  getBooksById(id: number): Book | null{
    return books.find(book => book.id === id);
  }
}
