import { Module } from '@nestjs/common';
import { OauthAccountsService } from './oauth_accounts.service';
import { OauthAccountsController } from './oauth_accounts.controller';
import { DatabaseModule } from '../database/database.module';
import { oauthAccountsProviders } from './oauth_accounts.providers';

@Module({
  imports: [DatabaseModule],
  providers: [OauthAccountsService, ...oauthAccountsProviders],
  controllers: [OauthAccountsController],
  exports: [OauthAccountsService],
})
export class OauthAccountsModule {}
