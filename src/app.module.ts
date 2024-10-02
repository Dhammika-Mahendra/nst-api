import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
