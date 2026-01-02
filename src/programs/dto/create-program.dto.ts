import type { CreateProgramDaysDto } from "src/programs_days/dto/create-program-days.dto";

export type CreateProgramDto = {
    name: string,
    duration: number,
    goal: string,
    program_days: CreateProgramDaysDto[]
};