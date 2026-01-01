import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { programsProviders } from './programs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...programsProviders, ProgramsService], 
  controllers: [ProgramsController],
  exports: [ProgramsService],
})
export class ProgramsModule {}
