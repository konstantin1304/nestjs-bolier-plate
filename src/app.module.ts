import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AnswersModule } from './answers/answers.module';
import { CategoriesModule } from './categories/categories.module';
import { GradesModule } from './grades/grades.module';
import { ProfessionsModule } from './professions/professions.module';
import { QuestionsModule } from './questions/questions.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    AnswersModule,
    CategoriesModule,
    GradesModule,
    ProfessionsModule,
    QuestionsModule,
    ReportsModule,
    MongooseModule.forRoot(
      'mongodb+srv://zakharchenkokv:11110000Kot@boostdb.efkkvhj.mongodb.net/boost?retryWrites=true&w=majority&appName=BoostDB',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
