import { DataSource } from "typeorm";
import { Day } from "./days.entity";

export const daysProviders = [
    {
        provide: 'DAY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Day),
        inject: ['DATA_SOURCE'],
    },
]
