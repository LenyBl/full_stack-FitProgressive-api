import { Test, TestingModule } from '@nestjs/testing';
import { BodyWeightsController } from './body_weights.controller';

describe('BodyWeightsController', () => {
  let controller: BodyWeightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyWeightsController],
    }).compile();

    controller = module.get<BodyWeightsController>(BodyWeightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
