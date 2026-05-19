import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Program } from '../../programs/entities/programs.entity';
import { ProgramDayExercise } from '../../program_day_exercises/entities/program_day_exercises.entity';
import { WorkoutSession } from '../../workout_sessions/entities/workout_sessions.entity';

@Entity('program_days')
export class ProgramDay {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  program_id!: string;

  @ManyToOne(() => Program, (program) => program.programDays, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'program_id' })
  program!: Program;

  @Column()
  name!: string;

  @Column({ type: 'smallint', nullable: true })
  day_of_week!: number;

  @Column({ type: 'smallint' })
  sort_order!: number;

  @OneToMany(() => ProgramDayExercise, (pde) => pde.programDay)
  programDayExercises!: ProgramDayExercise[];

  @OneToMany(() => WorkoutSession, (ws) => ws.programDay)
  workoutSessions!: WorkoutSession[];
}

