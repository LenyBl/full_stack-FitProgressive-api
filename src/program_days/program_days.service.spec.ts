import { Test, TestingModule } from '@nestjs/testing';
import { ProgramDaysService } from './program_days.service';

describe('ProgramDaysService', () => {
  let service: ProgramDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramDaysService],
    }).compile();

    service = module.get<ProgramDaysService>(ProgramDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
