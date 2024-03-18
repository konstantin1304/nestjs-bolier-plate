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
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { UpdateQuestionsDto } from './dto/update-questions.dto';
import { QuestionsService } from './questions.service';
import { Question } from './schemas/questions.schema';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  getAll(): Promise<Question[]> {
    return this.questionsService.getAll();
  }

  @Get(':questionId')
  getOne(@Param('questionId') questionId: string): Promise<Question> {
    return this.questionsService.getById(questionId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createQuestionDto: CreateQuestionsDto): Promise<Question> {
    return this.questionsService.create(createQuestionDto);
  }

  @Delete(':questionId')
  remove(@Param('questionId') questionId: string): Promise<Question> {
    return this.questionsService.remove(questionId);
  }

  @Put(':questionId')
  update(
    @Body() updateQuestionDto: UpdateQuestionsDto,
    @Param('questionId') questionId: string,
  ): Promise<Question> {
    return this.questionsService.update(questionId, updateQuestionDto);
  }
}
