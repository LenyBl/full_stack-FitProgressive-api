import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Exercise } from "src/exercises/exercises.entity";
import { Day } from "src/days/days.entity";

@Entity('exercises_days')
export class ExerciseDay {

    @PrimaryColumn()
    exercise_id: number;

    @PrimaryColumn()
    day_id: number;

    @ManyToOne(() => Exercise, exercise => exercise.exercise_days, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'exercise_id' })
    exercise: Exercise;

    @ManyToOne(() => Day, day => day.exercise_days)
    @JoinColumn({ name: 'day_id' })
    day: Day;
}