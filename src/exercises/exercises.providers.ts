import { DataSource } from 'typeorm';
import { Exercise } from './entities/exercises.entity';

export const exercisesProviders = [
  {
    provide: 'EXERCISES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercise),
    inject: ['DATA_SOURCE'],
  },
];
