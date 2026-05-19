import { Module } from '@nestjs/common';
import { BodyWeightsService } from './body_weights.service';
import { BodyWeightsController } from './body_weights.controller';
import { DatabaseModule } from '../database/database.module';
import { bodyWeightsProviders } from './body_weights.providers';

@Module({
  imports: [DatabaseModule],
  providers: [BodyWeightsService, ...bodyWeightsProviders],
  controllers: [BodyWeightsController],
  exports: [BodyWeightsService],
})
export class BodyWeightsModule {}
