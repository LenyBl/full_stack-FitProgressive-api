import { DataSource } from 'typeorm';
import { WorkoutSession } from './entities/workout_sessions.entity';

export const workoutSessionsProviders = [
  {
    provide: 'WORKOUT_SESSIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(WorkoutSession),
    inject: ['DATA_SOURCE'],
  },
];
