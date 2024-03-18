import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportsDto } from './dto/create-reports.dto';
import { Report, ReportDocument } from './schemas/reports.schema';
import { UpdateReportsDto } from './dto/update-reports.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  async getAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  async getById(reportId: string): Promise<Report> {
    return this.reportModel.findOne({ reportId: reportId }).exec();
  }

  async create(reportDto: CreateReportsDto): Promise<Report> {
    const newProduct = new this.reportModel(reportDto);
    return newProduct.save();
  }

  async remove(reportId: string): Promise<Report> {
    return this.reportModel.findOneAndDelete({ reportId: reportId }).exec();
  }

  async update(reportId: string, reportDto: UpdateReportsDto): Promise<Report> {
    return this.reportModel.findOneAndUpdate(
      { reportId: reportId },
      reportDto,
      {
        new: true,
      },
    );
  }
}
