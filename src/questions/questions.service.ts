import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { Question, QuestionDocument } from './schemas/questions.schema';
import { UpdateQuestionsDto } from './dto/update-questions.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async getAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async getById(questionId: string): Promise<Question> {
    return this.questionModel.findOne({ questionId: questionId }).exec();
  }

  async create(questionDto: CreateQuestionsDto): Promise<Question> {
    const newProduct = new this.questionModel(questionDto);
    return newProduct.save();
  }

  async remove(questionId: string): Promise<Question> {
    return this.questionModel
      .findOneAndDelete({ questionId: questionId })
      .exec();
  }

  async update(
    questionId: string,
    questionDto: UpdateQuestionsDto,
  ): Promise<Question> {
    return this.questionModel.findOneAndUpdate(
      { questionId: questionId },
      questionDto,
      {
        new: true,
      },
    );
  }
}
