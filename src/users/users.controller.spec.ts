import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUsersService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all users', async () => {
    const users: User[] = [
      { user_id: 1, email: 'a@test.com' } as User,
      { user_id: 2, email: 'b@test.com' } as User,
    ];

    mockUsersService.findAll.mockResolvedValue(users);

    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(result).toEqual(users);
  });

  it('should throw an error if service fails', async () => {
    mockUsersService.findAll.mockRejectedValue(new Error('DB error'));

    await expect(controller.findAll()).rejects.toThrow(
      'Failed to fetch users',
    );
  });
});
