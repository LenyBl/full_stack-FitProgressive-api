import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsDaysController } from './programs_days.controller';

describe('ProgramsDaysController', () => {
  let controller: ProgramsDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramsDaysController],
    }).compile();

    controller = module.get<ProgramsDaysController>(ProgramsDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
