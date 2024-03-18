import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { Category, CategoryDocument } from './schemas/categories.schema';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async getAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getById(categoryId: string): Promise<Category> {
    return this.categoryModel.findOne({ categoryId: categoryId }).exec();
  }

  async create(categoryDto: CreateCategoriesDto): Promise<Category> {
    const newProduct = new this.categoryModel(categoryDto);
    return newProduct.save();
  }

  async remove(categoryId: string): Promise<Category> {
    return this.categoryModel
      .findOneAndDelete({ categoryId: categoryId })
      .exec();
  }

  async update(
    categoryId: string,
    categoryDto: UpdateCategoriesDto,
  ): Promise<Category> {
    return this.categoryModel.findOneAndUpdate(
      { categoryId: categoryId },
      categoryDto,
      {
        new: true,
      },
    );
  }
}
