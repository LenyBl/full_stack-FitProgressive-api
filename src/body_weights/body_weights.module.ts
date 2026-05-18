import { Module } from '@nestjs/common';
import { BodyWeightsService } from './body_weights.service';
import { BodyWeightsController } from './body_weights.controller';

@Module({
  providers: [BodyWeightsService],
  controllers: [BodyWeightsController]
})
export class BodyWeightsModule {}
