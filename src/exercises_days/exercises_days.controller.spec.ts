import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesDaysController } from './exercises_days.controller';

describe('ExercisesDaysController', () => {
  let controller: ExercisesDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesDaysController],
    }).compile();

    controller = module.get<ExercisesDaysController>(ExercisesDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
