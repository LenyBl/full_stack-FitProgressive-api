import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Session } from './entities/sessions.entity';

@Injectable()
export class SessionsService {
  constructor(
    @Inject('SESSIONS_REPOSITORY')
    private readonly sessionsRepository: Repository<Session>,
  ) {}
}
