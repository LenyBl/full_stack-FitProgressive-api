import { Module } from '@nestjs/common';
import { ProgramsDaysController } from './programs_days.controller';
import { ProgramsDaysService } from './programs_days.service';

@Module({
  controllers: [ProgramsDaysController],
  providers: [ProgramsDaysService]
})
export class ProgramsDaysModule {}
