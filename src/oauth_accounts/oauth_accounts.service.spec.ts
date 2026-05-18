import { Test, TestingModule } from '@nestjs/testing';
import { OauthAccountsService } from './oauth_accounts.service';

describe('OauthAccountsService', () => {
  let service: OauthAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthAccountsService],
    }).compile();

    service = module.get<OauthAccountsService>(OauthAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
