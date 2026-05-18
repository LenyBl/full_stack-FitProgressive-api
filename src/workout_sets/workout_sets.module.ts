import { Module } from '@nestjs/common';
import { WorkoutSetsService } from './workout_sets.service';
import { WorkoutSetsController } from './workout_sets.controller';

@Module({
  providers: [WorkoutSetsService],
  controllers: [WorkoutSetsController]
})
export class WorkoutSetsModule {}
