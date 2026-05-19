import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { DatabaseModule } from '../database/database.module';
import { sessionsProviders } from './sessions.providers';

@Module({
  imports: [DatabaseModule],
  providers: [SessionsService, ...sessionsProviders],
  controllers: [SessionsController],
  exports: [SessionsService],
})
export class SessionsModule {}
