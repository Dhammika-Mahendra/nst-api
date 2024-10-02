import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'), // Fetches the database URL from the env file
      }),
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
