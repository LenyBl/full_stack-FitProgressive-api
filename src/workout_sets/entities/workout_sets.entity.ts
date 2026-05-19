import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { WorkoutSession } from '../../workout_sessions/entities/workout_sessions.entity';
import { Exercise } from '../../exercises/entities/exercises.entity';

@Entity('workout_sets')
export class WorkoutSet {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  session_id!: string;

  @ManyToOne(() => WorkoutSession, (ws) => ws.workoutSets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'session_id' })
  session!: WorkoutSession;

  @Column()
  exercise_id!: string;

  @ManyToOne(() => Exercise, (e) => e.workoutSets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exercise_id' })
  exercise!: Exercise;

  @Column({ type: 'smallint' })
  set_number!: number;

  @Column({ type: 'smallint', nullable: true })
  reps!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  weight!: number;

  @Column({ default: false })
  is_completed!: boolean;

  @Column({ type: 'smallint', nullable: true })
  rpe!: number;

  @Column({ type: 'datetime' })
  logged_at!: Date;
}

