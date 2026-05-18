import { Module } from '@nestjs/common';
import { ProgramDaysService } from './program_days.service';
import { ProgramDaysController } from './program_days.controller';

@Module({
  providers: [ProgramDaysService],
  controllers: [ProgramDaysController]
})
export class ProgramDaysModule {}
