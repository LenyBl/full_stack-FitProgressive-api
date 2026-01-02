import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Day } from './days.entity';

@Injectable()
export class DaysService {
   constructor(
       @Inject('DAY_REPOSITORY')
       private dayRepository: Repository<Day>,
     ) { }

    async findAll(): Promise<Day[]> {
        return this.dayRepository.find();
    }
}
