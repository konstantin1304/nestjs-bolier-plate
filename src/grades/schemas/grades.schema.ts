import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GradeDocument = Grade & Document;

@Schema()
export class Grade {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  gradeId: string;

  @Prop({ required: true })
  categories: string[];
}

export const GradesSchema = SchemaFactory.createForClass(Grade);
