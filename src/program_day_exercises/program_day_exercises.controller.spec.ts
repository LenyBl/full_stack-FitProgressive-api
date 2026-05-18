import { Test, TestingModule } from '@nestjs/testing';
import { ProgramDayExercisesController } from './program_day_exercises.controller';

describe('ProgramDayExercisesController', () => {
  let controller: ProgramDayExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramDayExercisesController],
    }).compile();

    controller = module.get<ProgramDayExercisesController>(ProgramDayExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
