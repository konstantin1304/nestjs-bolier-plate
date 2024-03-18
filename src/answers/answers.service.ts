import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnswersDto } from './dto/create-answers.dto';
import { Answer, AnswerDocument } from './schemas/answers.schema';
import { UpdateAnswersDto } from './dto/update-answers.dto';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
  ) {}

  async getAll(): Promise<Answer[]> {
    return this.answerModel.find().exec();
  }

  async getById(answerId: string): Promise<Answer> {
    return this.answerModel.findOne({ answerId: answerId }).exec();
  }

  async create(answerDto: CreateAnswersDto): Promise<Answer> {
    const newProduct = new this.answerModel(answerDto);
    return newProduct.save();
  }

  async remove(answerId: string): Promise<Answer> {
    return this.answerModel.findOneAndDelete({ answerId: answerId }).exec();
  }

  async update(answerId: string, answerDto: UpdateAnswersDto): Promise<Answer> {
    return this.answerModel.findOneAndUpdate(
      { answerId: answerId },
      answerDto,
      {
        new: true,
      },
    );
  }
}
