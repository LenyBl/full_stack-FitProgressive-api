import { DataSource } from 'typeorm';
import { ProgramDayExercise } from './entities/program_day_exercises.entity';

export const programDayExercisesProviders = [
  {
    provide: 'PROGRAM_DAY_EXERCISES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProgramDayExercise),
    inject: ['DATA_SOURCE'],
  },
];
