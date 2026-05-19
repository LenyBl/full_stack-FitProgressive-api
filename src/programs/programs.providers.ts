import { DataSource } from 'typeorm';
import { Program } from './entities/programs.entity';

export const programsProviders = [
  {
    provide: 'PROGRAMS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Program),
    inject: ['DATA_SOURCE'],
  },
];
