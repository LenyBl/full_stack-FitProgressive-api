import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import type { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(userId: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { user_id: userId } });
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { google_id: googleId } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async deleteById(userId: number): Promise<void> {
    await this.userRepository.delete({ user_id: userId });
  }
}