import { Module } from '@nestjs/common';
import { ProgramsDaysController } from './programs_days.controller';
import { ProgramsDaysService } from './programs_days.service';
import { DatabaseModule } from 'src/database/database.module';
import { programsDaysProviders } from './programs-days.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProgramsDaysController],
  providers: [...programsDaysProviders,ProgramsDaysService],
  exports: [ProgramsDaysService]
})
export class ProgramsDaysModule {}
