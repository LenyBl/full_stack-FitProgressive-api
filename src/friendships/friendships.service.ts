import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Friendship } from './entities/friendships.entity';

@Injectable()
export class FriendshipsService {
  constructor(
    @Inject('FRIENDSHIPS_REPOSITORY')
    private readonly friendshipsRepository: Repository<Friendship>,
  ) {}
}
