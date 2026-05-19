import { DataSource } from 'typeorm';
import { Session } from './entities/sessions.entity';

export const sessionsProviders = [
  {
    provide: 'SESSIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Session),
    inject: ['DATA_SOURCE'],
  },
];
