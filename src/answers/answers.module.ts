import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { Answer, AnswersSchema } from './schemas/answers.schema';

@Module({
  providers: [AnswersService],
  controllers: [AnswersController],
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswersSchema }]),
  ],
})
export class AnswersModule {}
