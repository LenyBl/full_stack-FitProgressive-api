import { Module } from '@nestjs/common';
import { FriendshipsService } from './friendships.service';
import { FriendshipsController } from './friendships.controller';
import { DatabaseModule } from '../database/database.module';
import { friendshipsProviders } from './friendships.providers';

@Module({
  imports: [DatabaseModule],
  providers: [FriendshipsService, ...friendshipsProviders],
  controllers: [FriendshipsController],
  exports: [FriendshipsService],
})
export class FriendshipsModule {}
