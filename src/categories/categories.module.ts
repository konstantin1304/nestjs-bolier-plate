import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category, CategoriesSchema } from './schemas/categories.schema';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategoriesSchema },
    ]),
  ],
})
export class CategoriesModule {}
