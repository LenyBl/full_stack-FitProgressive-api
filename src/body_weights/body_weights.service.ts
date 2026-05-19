import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BodyWeight } from './entities/body_weights.entity';

@Injectable()
export class BodyWeightsService {
  constructor(
    @Inject('BODY_WEIGHTS_REPOSITORY')
    private readonly bodyWeightsRepository: Repository<BodyWeight>,
  ) {}
}
