import { DataSource } from "typeorm";
import { Exercise } from "./exercises.entity";

export const exercisesProviders = [
    {
        provide: 'EXERCISE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercise),
        inject: ['DATA_SOURCE'],
    },
];