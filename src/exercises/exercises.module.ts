import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { DatabaseModule } from '../database/database.module';
import { exercisesProviders } from './exercises.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...exercisesProviders, ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
