import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProgramDay } from '../../program_days/entities/program_days.entity';
import { Exercise } from '../../exercises/entities/exercises.entity';

@Entity('program_day_exercises')
export class ProgramDayExercise {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  program_day_id!: string;

  @ManyToOne(() => ProgramDay, (pd) => pd.programDayExercises, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'program_day_id' })
  programDay!: ProgramDay;

  @Column()
  exercise_id!: string;

  @ManyToOne(() => Exercise, (e) => e.programDayExercises, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exercise_id' })
  exercise!: Exercise;

  @Column({ type: 'smallint' })
  sort_order!: number;

  @Column({ type: 'smallint', nullable: true })
  target_sets!: number;

  @Column({ type: 'smallint', nullable: true })
  target_reps!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  target_weight!: number;

  @Column({ type: 'text', nullable: true })
  notes!: string;
}

