import { DataSource } from 'typeorm';
import { env } from 'process';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: env.TYPE_DATABASE as any,
        host: env.HOST_DATABASE,
        port: parseInt(env.PORT_DATABASE ?? '3306'),
        username: env.USERNAME_DATABASE,
        password: env.PASSWORD_DATABASE,
        database: env.DATABASE_NAME,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
