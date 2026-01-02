import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsDaysService } from './programs_days.service';

describe('ProgramsDaysService', () => {
  let service: ProgramsDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramsDaysService],
    }).compile();

    service = module.get<ProgramsDaysService>(ProgramsDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
