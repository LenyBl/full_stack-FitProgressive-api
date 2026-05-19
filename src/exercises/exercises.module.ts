import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { DatabaseModule } from '../database/database.module';
import { exercisesProviders } from './exercises.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ExercisesService, ...exercisesProviders],
  controllers: [ExercisesController],
  exports: [ExercisesService],
})
export class ExercisesModule {}
