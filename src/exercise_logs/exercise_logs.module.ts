import { Module } from '@nestjs/common';
import { ExerciseLogsController } from './exercise_logs.controller';
import { ExerciseLogsService } from './exercise_logs.service';

@Module({
  controllers: [ExerciseLogsController],
  providers: [ExerciseLogsService]
})
export class ExerciseLogsModule {}
