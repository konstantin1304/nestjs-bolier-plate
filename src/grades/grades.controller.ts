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
import { CreateGradesDto } from './dto/create-grades.dto';
import { UpdateGradesDto } from './dto/update-grades.dto';
import { GradesService } from './grades.service';
import { Grade } from './schemas/grades.schema';

@Controller('grades')
export class GradesController {
  constructor(private readonly categoriesService: GradesService) {}

  @Get()
  getAll(): Promise<Grade[]> {
    return this.categoriesService.getAll();
  }

  @Get(':gradeId')
  getOne(@Param('gradeId') gradeId: string): Promise<Grade> {
    return this.categoriesService.getById(gradeId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createGradeDto: CreateGradesDto): Promise<Grade> {
    return this.categoriesService.create(createGradeDto);
  }

  @Delete(':gradeId')
  remove(@Param('gradeId') gradeId: string): Promise<Grade> {
    return this.categoriesService.remove(gradeId);
  }

  @Put(':gradeId')
  update(
    @Body() updateGradeDto: UpdateGradesDto,
    @Param('gradeId') gradeId: string,
  ): Promise<Grade> {
    return this.categoriesService.update(gradeId, updateGradeDto);
  }
}
