import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  getBookById(@Param('id') id:string): Book|string {
    const bookId = +id;
    let result : Book|null = this.bookService.getBooksById(bookId);
    if(result){
      return result;
    }else{
      return `Book with id ${id} not found`;
    }
  }
}
