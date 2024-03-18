import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Report, ReportsSchema } from './schemas/reports.schema';

@Module({
  providers: [ReportsService],
  controllers: [ReportsController],
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportsSchema }]),
  ],
})
export class ReportsModule {}
