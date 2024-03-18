import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { Profession, ProfessionsSchema } from './schemas/professions.schema';

@Module({
  providers: [ProfessionsService],
  controllers: [ProfessionsController],
  imports: [
    MongooseModule.forFeature([
      { name: Profession.name, schema: ProfessionsSchema },
    ]),
  ],
})
export class ProfessionsModule {}
