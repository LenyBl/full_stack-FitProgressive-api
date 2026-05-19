import { Module } from '@nestjs/common';
import { WorkoutSessionsService } from './workout_sessions.service';
import { WorkoutSessionsController } from './workout_sessions.controller';
import { DatabaseModule } from '../database/database.module';
import { workoutSessionsProviders } from './workout_sessions.providers';

@Module({
  imports: [DatabaseModule],
  providers: [WorkoutSessionsService, ...workoutSessionsProviders],
  controllers: [WorkoutSessionsController],
  exports: [WorkoutSessionsService],
})
export class WorkoutSessionsModule {}
