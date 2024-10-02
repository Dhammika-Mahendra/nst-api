import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
    constructor() {}
    
    @Get()
    getHello(): string {
      return "hello book";
    }
}
