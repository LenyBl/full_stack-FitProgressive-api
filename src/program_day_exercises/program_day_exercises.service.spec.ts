import { Test, TestingModule } from '@nestjs/testing';
import { ProgramDayExercisesService } from './program_day_exercises.service';

describe('ProgramDayExercisesService', () => {
  let service: ProgramDayExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramDayExercisesService],
    }).compile();

    service = module.get<ProgramDayExercisesService>(ProgramDayExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
