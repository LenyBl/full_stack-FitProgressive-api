import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { programsProviders } from './programs.providers';
import { programsDaysProviders } from 'src/programs_days/programs-days.providers';
import { DatabaseModule } from '../database/database.module';
import { ProgramsDaysModule } from 'src/programs_days/programs_days.module';

@Module({
  imports: [DatabaseModule, ProgramsDaysModule],
  providers: [...programsProviders, ...programsDaysProviders, ProgramsService],
  controllers: [ProgramsController],
  exports: [ProgramsService],
})
export class ProgramsModule { }
