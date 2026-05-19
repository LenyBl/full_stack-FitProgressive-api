import { DataSource } from 'typeorm';
import { Friendship } from './entities/friendships.entity';

export const friendshipsProviders = [
  {
    provide: 'FRIENDSHIPS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Friendship),
    inject: ['DATA_SOURCE'],
  },
];
