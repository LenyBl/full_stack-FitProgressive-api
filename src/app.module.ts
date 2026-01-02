import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProgramsModule } from './programs/programs.module';
import { ExercisesModule } from './exercises/exercises.module';
import { DaysModule } from './days/days.module';
import { ExercisesDaysModule } from './exercises_days/exercises_days.module';
import { ProgramsDaysModule } from './programs_days/programs_days.module';
import { ExerciseLogsModule } from './exercise_logs/exercise_logs.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [UsersModule, AuthModule, ProgramsModule, ExercisesModule, DaysModule, ExercisesDaysModule, ProgramsDaysModule, ExerciseLogsModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
