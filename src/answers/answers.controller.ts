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
import { CreateAnswersDto } from './dto/create-answers.dto';
import { UpdateAnswersDto } from './dto/update-answers.dto';
import { AnswersService } from './answers.service';
import { Answer } from './schemas/answers.schema';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poke')
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Answer[]> {
    return this.answersService.getAll();
  }

  @Get(':answerId')
  getOne(@Param('answerId') answerId: string): Promise<Answer> {
    return this.answersService.getById(answerId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateAnswersDto): Promise<Answer> {
    return this.answersService.create(createProductDto);
  }

  @Delete(':answerId')
  remove(@Param('answerId') answerId: string): Promise<Answer> {
    return this.answersService.remove(answerId);
  }

  @Put(':answerId')
  update(
    @Body() updateProductDto: UpdateAnswersDto,
    @Param('answerId') answerId: string,
  ): Promise<Answer> {
    return this.answersService.update(answerId, updateProductDto);
  }
}
