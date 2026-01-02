import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Program } from "src/programs/programs.entity";
import { ExerciseLog } from "src/exercise_logs/exercise_logs.entity";
import { ExerciseDay } from "src/exercises_days/exercise_days.entity";

@Entity('exercises')
export class Exercise {
    
    @PrimaryGeneratedColumn()
    exercise_id: number;

    @ManyToOne(() => Program, program => program.program_id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'program_id' })
    program: Program;

    @OneToMany(() => ExerciseLog, exerciseLog => exerciseLog.exercise)
    exercise_logs: ExerciseLog[];

    @OneToMany(() => ExerciseDay, exerciseDay => exerciseDay.exercise)
    exercise_days: ExerciseDay[];

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50})
    exercise_type: string;

    @Column({ length: 50 })
    mark: string;

    @Column()
    target_series: number;

    @Column()
    target_reps: number;

    @Column({ type: 'decimal' })
    weight_increment: number;

    @Column({ type: 'decimal' })
    target_weight: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}