import { Module } from '@nestjs/common';
import { ProgramDayExercisesService } from './program_day_exercises.service';
import { ProgramDayExercisesController } from './program_day_exercises.controller';

@Module({
  providers: [ProgramDayExercisesService],
  controllers: [ProgramDayExercisesController]
})
export class ProgramDayExercisesModule {}
