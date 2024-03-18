import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ required: true })
  reportId: string;

  @Prop({ required: true })
  data: string[];
}

export const ReportsSchema = SchemaFactory.createForClass(Report);
