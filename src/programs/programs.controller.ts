import { Controller, Get, Req, Delete } from '@nestjs/common';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
    constructor(private readonly programsService: ProgramsService) {}

    @Get()
    async findAll() {
        try {
            return await this.programsService.findAll();
        } catch (error) {
            throw new Error('Failed to fetch programs');
        }
    }

    @Get('user')
    async findUserPrograms(@Req() req) {
        try {
            const userId = req.user.user_id;
            return await this.programsService.findUserPrograms(userId);
        } catch (error) {
            throw new Error('Failed to fetch user programs');
        }
    }

    @Delete(':id')
    async deleteProgram(@Req() req) {
        try {
            const programId = req.params.id;
            return await this.programsService.deleteProgram(programId);
        } catch (error) {
            throw new Error('Failed to delete program');
        }
    }
}