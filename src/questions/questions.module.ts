import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Question, QuestionsSchema } from './schemas/questions.schema';

@Module({
  providers: [QuestionsService],
  controllers: [QuestionsController],
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionsSchema },
    ]),
  ],
})
export class QuestionsModule {}
