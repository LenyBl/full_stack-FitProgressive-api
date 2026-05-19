import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProgramDay } from './entities/program_days.entity';

@Injectable()
export class ProgramDaysService {
  constructor(
    @Inject('PROGRAM_DAYS_REPOSITORY')
    private readonly programDaysRepository: Repository<ProgramDay>,
  ) {}
}
