import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../users/users.entity";
import { Exercise } from "src/exercises/exercises.entity";
import { ProgramDay } from "src/programs_days/programs_days.entity";
import { ExerciseLog } from "src/exercise_logs/exercise_logs.entity";

@Entity('programs')
export class Program {

    @PrimaryGeneratedColumn()
    program_id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100 })
    goal: string;

    @Column()
    duration: number;

    @ManyToOne(() => User, user => user.programs, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Exercise, exercise => exercise.program, { onDelete: 'CASCADE' })
    exercises: Exercise[];

    @OneToMany(() => ProgramDay, programDay => programDay.program, { onDelete: 'CASCADE' })
    program_days: ProgramDay[];

    @OneToMany(() => ExerciseLog, exerciseLog => exerciseLog.program, { onDelete: 'CASCADE' })
    exercise_logs: ExerciseLog[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
