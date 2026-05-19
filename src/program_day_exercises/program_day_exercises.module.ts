import { Module } from '@nestjs/common';
import { ProgramDayExercisesService } from './program_day_exercises.service';
import { ProgramDayExercisesController } from './program_day_exercises.controller';
import { DatabaseModule } from '../database/database.module';
import { programDayExercisesProviders } from './program_day_exercises.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramDayExercisesService, ...programDayExercisesProviders],
  controllers: [ProgramDayExercisesController],
  exports: [ProgramDayExercisesService],
})
export class ProgramDayExercisesModule {}
