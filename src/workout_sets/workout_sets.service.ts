import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkoutSet } from './entities/workout_sets.entity';

@Injectable()
export class WorkoutSetsService {
  constructor(
    @Inject('WORKOUT_SETS_REPOSITORY')
    private readonly workoutSetsRepository: Repository<WorkoutSet>,
  ) {}
}
