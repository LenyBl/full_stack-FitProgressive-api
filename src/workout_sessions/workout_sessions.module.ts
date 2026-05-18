import { Module } from '@nestjs/common';
import { WorkoutSessionsService } from './workout_sessions.service';
import { WorkoutSessionsController } from './workout_sessions.controller';

@Module({
  providers: [WorkoutSessionsService],
  controllers: [WorkoutSessionsController]
})
export class WorkoutSessionsModule {}
