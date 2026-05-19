import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OAuthAccount } from './entities/oauth_accounts.entity';

@Injectable()
export class OauthAccountsService {
  constructor(
    @Inject('OAUTH_ACCOUNTS_REPOSITORY')
    private readonly oauthAccountsRepository: Repository<OAuthAccount>,
  ) {}
}
