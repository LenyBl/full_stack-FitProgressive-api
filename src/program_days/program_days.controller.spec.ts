import { Test, TestingModule } from '@nestjs/testing';
import { ProgramDaysController } from './program_days.controller';

describe('ProgramDaysController', () => {
  let controller: ProgramDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramDaysController],
    }).compile();

    controller = module.get<ProgramDaysController>(ProgramDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
