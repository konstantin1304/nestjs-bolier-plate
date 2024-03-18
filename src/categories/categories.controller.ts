import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { CategoriesService } from './categories.service';
import { Category } from './schemas/categories.schema';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string): Promise<Category> {
    return this.categoriesService.getById(categoryId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createCategoryDto: CreateCategoriesDto): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':categoryId')
  remove(@Param('categoryId') categoryId: string): Promise<Category> {
    return this.categoriesService.remove(categoryId);
  }

  @Put(':categoryId')
  update(
    @Body() updateCategoryDto: UpdateCategoriesDto,
    @Param('categoryId') categoryId: string,
  ): Promise<Category> {
    return this.categoriesService.update(categoryId, updateCategoryDto);
  }
}
