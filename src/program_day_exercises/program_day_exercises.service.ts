import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProgramDayExercise } from './entities/program_day_exercises.entity';

@Injectable()
export class ProgramDayExercisesService {
  constructor(
    @Inject('PROGRAM_DAY_EXERCISES_REPOSITORY')
    private readonly programDayExercisesRepository: Repository<ProgramDayExercise>,
  ) {}
}
