import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/users/users.entity";
import { Exercise } from "src/exercises/exercises.entity";
import { Day } from "src/days/days.entity";
import { Program } from "src/programs/programs.entity";

@Entity('exercise_logs')
export class ExerciseLog {

    @PrimaryGeneratedColumn()
    log_id: number;

    @ManyToOne(() => User, user => user.user_id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Exercise, exercise => exercise.exercise_id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'exercise_id' })
    exercise: Exercise;

    @ManyToOne(() => Day, day => day.day_id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'day_id' })
    day: Day;

    @ManyToOne(() => Program, program => program.program_id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'program_id' })
    program: Program;

    @Column()
    performed_at: Date;

    @Column()
    series: number;

    @Column()
    reps: number;

    @Column({ type: 'decimal' })
    weight: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}