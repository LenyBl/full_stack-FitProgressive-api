import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';
import { Program } from '../../programs/entities/programs.entity';
import { ProgramDay } from '../../program_days/entities/program_days.entity';
import { WorkoutSet } from '../../workout_sets/entities/workout_sets.entity';

@Entity('workout_sessions')
export class WorkoutSession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @ManyToOne(() => User, (user) => user.workoutSessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ nullable: true })
  program_id!: string;

  @ManyToOne(() => Program, (program) => program.workoutSessions, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'program_id' })
  program!: Program;

  @Column({ nullable: true })
  program_day_id!: string;

  @ManyToOne(() => ProgramDay, (pd) => pd.workoutSessions, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'program_day_id' })
  programDay!: ProgramDay;

  @Column({ type: 'datetime' })
  started_at!: Date;

  @Column({ type: 'datetime', nullable: true })
  ended_at!: Date;

  @Column({ type: 'text', nullable: true })
  notes!: string;

  @OneToMany(() => WorkoutSet, (ws) => ws.session)
  workoutSets!: WorkoutSet[];
}

