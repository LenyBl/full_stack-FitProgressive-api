import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { DaysController } from './days.controller';
import { DaysService } from './days.service';
import { daysProviders } from './days.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DaysController],
  providers: [...daysProviders, DaysService],
  exports: [DaysService]
})
export class DaysModule { }
