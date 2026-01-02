import { DataSource } from "typeorm";
import { ProgramDay } from "./programs_days.entity";

export const programsDaysProviders = [
    {
        provide: 'PROGRAM_DAY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProgramDay),
        inject: ['DATA_SOURCE'],
    },
];