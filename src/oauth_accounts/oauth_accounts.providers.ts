import { DataSource } from 'typeorm';
import { OAuthAccount } from './entities/oauth_accounts.entity';

export const oauthAccountsProviders = [
  {
    provide: 'OAUTH_ACCOUNTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OAuthAccount),
    inject: ['DATA_SOURCE'],
  },
];
