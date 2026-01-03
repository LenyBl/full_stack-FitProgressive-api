import { Controller, Get, Req, Delete, Post, Param, Body } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import type { CreateProgramDto } from './dto/create-program.dto';

@Controller('programs')
export class ProgramsController {
    constructor(private readonly programsService: ProgramsService) { }

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

    @Get('program/:id')
    async findProgramWithDays(@Param('id') programId: number) {
        try {
            return await this.programsService.findProgramWithDays(programId);
        } catch (error) {
            console.log(error);
            throw new Error('Failed to find Program', error);
        }
    }

    @Post('create')
    async createProgram(@Req() req, @Body() createProgramDto: CreateProgramDto) {
        const userId = req.user.sub;
        try {
            return this.programsService.createProgram(createProgramDto, userId)
        } catch (error) {
            throw new Error('Failed to create Program', error);
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