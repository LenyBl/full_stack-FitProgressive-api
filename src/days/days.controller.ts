import { Controller, Get } from '@nestjs/common';
import { DaysService } from './days.service';

@Controller('days')
export class DaysController {
    constructor(private readonly daysService: DaysService) { }

    @Get()
    async findAll() {
        try {
            return await this.daysService.findAll();
        } catch (error) {
            throw new Error('Failed to fetch days');
        }
    }

}
