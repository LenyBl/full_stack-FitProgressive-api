import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutSetsService } from './workout_sets.service';

describe('WorkoutSetsService', () => {
  let service: WorkoutSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutSetsService],
    }).compile();

    service = module.get<WorkoutSetsService>(WorkoutSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
