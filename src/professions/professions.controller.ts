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
import { CreateProfessionsDto } from './dto/create-professions.dto';
import { UpdateProfessionsDto } from './dto/update-professions.dto';
import { ProfessionsService } from './professions.service';
import { Profession } from './schemas/professions.schema';

@Controller('professions')
export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) {}

  @Get()
  getAll(): Promise<Profession[]> {
    return this.professionsService.getAll();
  }

  @Get(':professionId')
  getOne(@Param('professionId') professionId: string): Promise<Profession> {
    return this.professionsService.getById(professionId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProfessionDto: CreateProfessionsDto): Promise<Profession> {
    return this.professionsService.create(createProfessionDto);
  }

  @Delete(':professionId')
  remove(@Param('professionId') professionId: string): Promise<Profession> {
    return this.professionsService.remove(professionId);
  }

  @Put(':professionId')
  update(
    @Body() updateProfessionDto: UpdateProfessionsDto,
    @Param('professionId') professionId: string,
  ): Promise<Profession> {
    return this.professionsService.update(professionId, updateProfessionDto);
  }
}
