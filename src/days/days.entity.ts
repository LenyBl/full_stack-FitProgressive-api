import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { ProgramDay } from "src/programs_days/programs_days.entity";
import { ExerciseDay } from "src/exercises_days/exercise_days.entity";
import { ExerciseLog } from "src/exercise_logs/exercise_logs.entity";

@Entity('days')
export class Day {

    @PrimaryColumn()
    day_id: number;

    @Column({ length: 10 })
    code: string;

    @Column({ length: 20 })
    name: string;

    @Column()
    order_index: number;

    @OneToMany(() => ProgramDay, programDay => programDay.day)
    program_days: ProgramDay[];

    @OneToMany(() => ExerciseDay, exerciseDay => exerciseDay.day)
    exercise_days: ExerciseDay[];

    @OneToMany(() => ExerciseLog, exerciseLog => exerciseLog.day)
    exercise_logs: ExerciseLog[];
}