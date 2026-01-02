import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Program } from './programs.entity';

@Injectable()
export class ProgramsService {
    constructor(
        @Inject('PROGRAM_REPOSITORY')
        private programRepository: Repository<Program>,
    ) { }

    async findAll(): Promise<Program[]> {
        return this.programRepository.find();
    }

    async findUserPrograms(userId: number): Promise<Program[]> {
        return this.programRepository.find({ where: { user: { user_id: userId } } });
    }

    async deleteProgram(programId: number): Promise<void> {
        await this.programRepository.delete(programId);
    }
}
