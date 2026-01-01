import { DataSource } from "typeorm";
import { Program } from "./programs.entity";

export const programsProviders = [
    {
        provide: 'PROGRAM_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Program),
        inject: ['DATA_SOURCE'],
    },
];