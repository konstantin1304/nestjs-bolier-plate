import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  answerId: string;
}

export const AnswersSchema = SchemaFactory.createForClass(Answer);
