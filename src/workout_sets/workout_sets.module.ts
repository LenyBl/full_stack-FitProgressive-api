import { Module } from '@nestjs/common';
import { WorkoutSetsService } from './workout_sets.service';
import { WorkoutSetsController } from './workout_sets.controller';
import { DatabaseModule } from '../database/database.module';
import { workoutSetsProviders } from './workout_sets.providers';

@Module({
  imports: [DatabaseModule],
  providers: [WorkoutSetsService, ...workoutSetsProviders],
  controllers: [WorkoutSetsController],
  exports: [WorkoutSetsService],
})
export class WorkoutSetsModule {}
