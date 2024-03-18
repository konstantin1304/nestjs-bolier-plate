import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfessionDocument = Profession & Document;

@Schema()
export class Profession {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  professionId: string;

  @Prop({ required: true })
  questions: string[];

  @Prop({ required: true })
  grades: string[];
}

export const ProfessionsSchema = SchemaFactory.createForClass(Profession);
