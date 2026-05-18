import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(uuid: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ uuid });
    if (!user) throw new NotFoundException(`User ${uuid} not found`);
    return user;
  }

  create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }

  async update(uuid: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(uuid);
    await this.usersRepository.update(uuid, dto);
    return this.findOne(uuid);
  }

  async remove(uuid: string): Promise<void> {
    await this.findOne(uuid);
    await this.usersRepository.delete(uuid);
  }
}
