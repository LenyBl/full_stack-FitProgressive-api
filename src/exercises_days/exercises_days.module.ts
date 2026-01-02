import { Module } from '@nestjs/common';
import { ExercisesDaysController } from './exercises_days.controller';
import { ExercisesDaysService } from './exercises_days.service';

@Module({
  controllers: [ExercisesDaysController],
  providers: [ExercisesDaysService]
})
export class ExercisesDaysModule {}
