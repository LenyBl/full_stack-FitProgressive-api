import { Test, TestingModule } from '@nestjs/testing';
import { OauthAccountsController } from './oauth_accounts.controller';

describe('OauthAccountsController', () => {
  let controller: OauthAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthAccountsController],
    }).compile();

    controller = module.get<OauthAccountsController>(OauthAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
