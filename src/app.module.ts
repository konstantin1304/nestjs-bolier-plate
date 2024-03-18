import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AnswersModule } from './answers/answers.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    AnswersModule,
    ProductsModule,
    CategoriesModule,
    MongooseModule.forRoot(
      'mongodb+srv://zakharchenkokv:11110000Kot@boostdb.efkkvhj.mongodb.net/boost?retryWrites=true&w=majority&appName=BoostDB',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
