import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  questions: string[];
}

export const CategoriesSchema = SchemaFactory.createForClass(Category);
