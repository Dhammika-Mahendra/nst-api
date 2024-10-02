import { Controller, Get } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './sampleData';

@Controller('book')
export class AppController {
  constructor(
    private readonly bookService: BookService
    ) {}

  @Get('all')
  getHello(): Book[] {
    return this.bookService.getAllBooks();
  }
}
