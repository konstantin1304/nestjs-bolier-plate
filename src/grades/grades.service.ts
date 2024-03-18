import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGradesDto } from './dto/create-grades.dto';
import { Grade, GradeDocument } from './schemas/grades.schema';
import { UpdateGradesDto } from './dto/update-grades.dto';

@Injectable()
export class GradesService {
  constructor(
    @InjectModel(Grade.name) private gradeModel: Model<GradeDocument>,
  ) {}

  async getAll(): Promise<Grade[]> {
    return this.gradeModel.find().exec();
  }

  async getById(gradeId: string): Promise<Grade> {
    return this.gradeModel.findOne({ gradeId: gradeId }).exec();
  }

  async create(gradeDto: CreateGradesDto): Promise<Grade> {
    const newProduct = new this.gradeModel(gradeDto);
    return newProduct.save();
  }

  async remove(gradeId: string): Promise<Grade> {
    return this.gradeModel.findOneAndDelete({ gradeId: gradeId }).exec();
  }

  async update(gradeId: string, gradeDto: UpdateGradesDto): Promise<Grade> {
    return this.gradeModel.findOneAndUpdate({ gradeId: gradeId }, gradeDto, {
      new: true,
    });
  }
}
