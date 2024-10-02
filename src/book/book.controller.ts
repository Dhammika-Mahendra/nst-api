import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    getHello(): string {
      return "hello book";
    }

    @Get('all')
    async getAllBooks(): Promise<Book[]> {
      return this.bookService.findAll();
    }
    
    @Post()
    async createBook(@Body() book: Book): Promise<Book> {
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBook(@Param('id') id: string,): Promise<Book> {
      return this.bookService.findById(id);
    }
}
