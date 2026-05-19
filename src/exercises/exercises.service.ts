import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercises.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject('EXERCISES_REPOSITORY')
    private readonly exercisesRepository: Repository<Exercise>,
  ) {}
}
