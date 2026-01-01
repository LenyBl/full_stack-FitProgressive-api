import { Controller, Get } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { Public } from 'src/auth/skipAuth';

@Controller('programs')
export class ProgramsController {
    constructor(private readonly programsService: ProgramsService) {}

    @Public()
    @Get()
    async findAll() {
        try {
            return await this.programsService.findAll();
        } catch (error) {
            throw new Error('Failed to fetch programs');
        }
    }
}