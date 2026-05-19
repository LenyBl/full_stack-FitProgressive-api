import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkoutSession } from './entities/workout_sessions.entity';

@Injectable()
export class WorkoutSessionsService {
  constructor(
    @Inject('WORKOUT_SESSIONS_REPOSITORY')
    private readonly workoutSessionsRepository: Repository<WorkoutSession>,
  ) {}
}
