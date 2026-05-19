import { Module } from '@nestjs/common';
import { ProgramDaysService } from './program_days.service';
import { ProgramDaysController } from './program_days.controller';
import { DatabaseModule } from '../database/database.module';
import { programDaysProviders } from './program_days.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramDaysService, ...programDaysProviders],
  controllers: [ProgramDaysController],
  exports: [ProgramDaysService],
})
export class ProgramDaysModule {}
