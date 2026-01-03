import { Program } from 'src/programs/programs.entity';
import { ProgramDay } from 'src/programs_days/programs_days.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import type { CreateProgramDto } from './dto/create-program.dto';

@Injectable()
export class ProgramsService {
    constructor(
        @Inject('PROGRAM_REPOSITORY')
        private readonly programRepository: Repository<Program>,

        @Inject('PROGRAM_DAY_REPOSITORY')
        private readonly programDayRepository: Repository<ProgramDay>,
    ) { }

    async findAll(): Promise<Program[]> {
        return this.programRepository.find();
    }

    async findUserPrograms(userId: number): Promise<Program[]> {
        return this.programRepository.find({ where: { user: { user_id: userId } } });
    }

    async findProgramWithDays(programId: number): Promise<Program | null> {
        return this.programRepository
            .createQueryBuilder('program')
            .innerJoinAndSelect('program.program_days', 'program_days')
            .innerJoinAndSelect('program_days.day', 'day')
            .where('program.program_id = :programId', { programId })
            .getOne()
    }

    async createProgram(createProgramDto: CreateProgramDto, userId: number): Promise<Program> {

        const program = {
            name: createProgramDto.name,
            goal: createProgramDto.goal,
            duration: createProgramDto.duration,
            user: { user_id: userId }
        };

        const savedProgram = await this.programRepository.save(program);

        const programDays = createProgramDto.program_days.map(pd => ({
            program_id: savedProgram.program_id,
            day_id: pd.day_id,
            day_order: pd.day_order,
        }));

        await this.programDayRepository.insert(programDays);

        return savedProgram;
    }

    async deleteProgram(programId: number): Promise<void> {
        await this.programRepository.delete(programId);
    }
}

