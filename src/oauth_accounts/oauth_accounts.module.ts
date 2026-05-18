import { Module } from '@nestjs/common';
import { OauthAccountsService } from './oauth_accounts.service';
import { OauthAccountsController } from './oauth_accounts.controller';

@Module({
  providers: [OauthAccountsService],
  controllers: [OauthAccountsController]
})
export class OauthAccountsModule {}
