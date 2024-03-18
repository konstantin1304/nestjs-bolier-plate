import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateReportsDto } from './dto/create-reports.dto';
import { UpdateReportsDto } from './dto/update-reports.dto';
import { ReportsService } from './reports.service';
import { Report } from './schemas/reports.schema';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getAll(): Promise<Report[]> {
    return this.reportsService.getAll();
  }

  @Get(':reportId')
  getOne(@Param('reportId') reportId: string): Promise<Report> {
    return this.reportsService.getById(reportId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createReportDto: CreateReportsDto): Promise<Report> {
    return this.reportsService.create(createReportDto);
  }

  @Delete(':reportId')
  remove(@Param('reportId') reportId: string): Promise<Report> {
    return this.reportsService.remove(reportId);
  }

  @Put(':reportId')
  update(
    @Body() updateReportDto: UpdateReportsDto,
    @Param('reportId') reportId: string,
  ): Promise<Report> {
    return this.reportsService.update(reportId, updateReportDto);
  }
}
