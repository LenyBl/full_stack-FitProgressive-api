import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OauthAccountsModule } from './oauth_accounts/oauth_accounts.module';
import { SessionsModule } from './sessions/sessions.module';
import { FriendshipsModule } from './friendships/friendships.module';
import { BodyWeightsModule } from './body_weights/body_weights.module';
import { ProgramsModule } from './programs/programs.module';
import { ProgramDaysModule } from './program_days/program_days.module';
import { ProgramDayExercisesModule } from './program_day_exercises/program_day_exercises.module';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutSessionsModule } from './workout_sessions/workout_sessions.module';
import { WorkoutSetsModule } from './workout_sets/workout_sets.module';

@Module({
  imports: [
    UsersModule,
    OauthAccountsModule,
    SessionsModule,
    FriendshipsModule,
    BodyWeightsModule,
    ProgramsModule,
    ProgramDaysModule,
    ProgramDayExercisesModule,
    ExercisesModule,
    WorkoutSessionsModule, WorkoutSetsModule,
    ConfigModule.forRoot({ envFilePath: ['.env.development.local', '.env.development', '.env.local', '.env'], isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
