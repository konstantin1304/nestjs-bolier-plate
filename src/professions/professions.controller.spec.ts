import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionsController } from './professions.controller';

describe('AnswerController', () => {
  let controller: ProfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessionsController],
    }).compile();

    controller = module.get<ProfessionsController>(ProfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
