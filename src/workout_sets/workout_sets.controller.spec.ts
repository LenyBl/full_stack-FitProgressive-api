import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutSetsController } from './workout_sets.controller';

describe('WorkoutSetsController', () => {
  let controller: WorkoutSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutSetsController],
    }).compile();

    controller = module.get<WorkoutSetsController>(WorkoutSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
