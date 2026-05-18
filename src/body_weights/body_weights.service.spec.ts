import { Test, TestingModule } from '@nestjs/testing';
import { BodyWeightsService } from './body_weights.service';

describe('BodyWeightsService', () => {
  let service: BodyWeightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyWeightsService],
    }).compile();

    service = module.get<BodyWeightsService>(BodyWeightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
