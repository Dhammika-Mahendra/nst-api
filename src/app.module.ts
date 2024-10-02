import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BookService],
})
export class AppModule {}
