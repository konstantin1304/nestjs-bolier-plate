import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { Grade, GradesSchema } from './schemas/grades.schema';

@Module({
  providers: [GradesService],
  controllers: [GradesController],
  imports: [
    MongooseModule.forFeature([{ name: Grade.name, schema: GradesSchema }]),
  ],
})
export class GradesModule {}
