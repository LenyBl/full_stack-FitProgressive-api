import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';
import { ProgramDayExercise } from '../../program_day_exercises/entities/program_day_exercises.entity';
import { WorkoutSet } from '../../workout_sets/entities/workout_sets.entity';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  created_by!: string;

  @ManyToOne(() => User, (user) => user.exercises, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by' })
  createdBy!: User;

  @Column()
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ nullable: true })
  muscle_group!: string;

  @Column({ nullable: true })
  equipment!: string;

  @Column({ default: false })
  is_public!: boolean;

  @CreateDateColumn({ type: 'datetime' })
  created_at!: Date;

  @OneToMany(() => ProgramDayExercise, (pde) => pde.exercise)
  programDayExercises!: ProgramDayExercise[];

  @OneToMany(() => WorkoutSet, (ws) => ws.exercise)
  workoutSets!: WorkoutSet[];
}

