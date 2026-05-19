import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Program } from './entities/programs.entity';

@Injectable()
export class ProgramsService {
  constructor(
    @Inject('PROGRAMS_REPOSITORY')
    private readonly programsRepository: Repository<Program>,
  ) {}
}
