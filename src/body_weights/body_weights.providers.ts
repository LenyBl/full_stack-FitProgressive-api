import { DataSource } from 'typeorm';
import { BodyWeight } from './entities/body_weights.entity';

export const bodyWeightsProviders = [
  {
    provide: 'BODY_WEIGHTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(BodyWeight),
    inject: ['DATA_SOURCE'],
  },
];
