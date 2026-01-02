import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseLogsController } from './exercise_logs.controller';

describe('ExerciseLogsController', () => {
  let controller: ExerciseLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseLogsController],
    }).compile();

    controller = module.get<ExerciseLogsController>(ExerciseLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
