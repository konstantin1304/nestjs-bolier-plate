import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  questionId: string;

  @Prop({ required: true })
  answers: string[];
}

export const QuestionsSchema = SchemaFactory.createForClass(Question);
