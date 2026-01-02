import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesDaysService } from './exercises_days.service';

describe('ExercisesDaysService', () => {
  let service: ExercisesDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisesDaysService],
    }).compile();

    service = module.get<ExercisesDaysService>(ExercisesDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
