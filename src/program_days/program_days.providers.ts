import { DataSource } from 'typeorm';
import { ProgramDay } from './entities/program_days.entity';

export const programDaysProviders = [
  {
    provide: 'PROGRAM_DAYS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProgramDay),
    inject: ['DATA_SOURCE'],
  },
];
