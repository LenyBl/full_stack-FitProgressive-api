import { DataSource } from 'typeorm';
import { WorkoutSet } from './entities/workout_sets.entity';

export const workoutSetsProviders = [
  {
    provide: 'WORKOUT_SETS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(WorkoutSet),
    inject: ['DATA_SOURCE'],
  },
];
