import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { DatabaseModule } from '../database/database.module';
import { programsProviders } from './programs.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramsService, ...programsProviders],
  controllers: [ProgramsController],
  exports: [ProgramsService],
})
export class ProgramsModule {}
