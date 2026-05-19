import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { OAuthAccount } from '../../oauth_accounts/entities/oauth_accounts.entity';
import { Session } from '../../sessions/entities/sessions.entity';
import { Friendship } from '../../friendships/entities/friendships.entity';
import { Program } from '../../programs/entities/programs.entity';
import { Exercise } from '../../exercises/entities/exercises.entity';
import { WorkoutSession } from '../../workout_sessions/entities/workout_sessions.entity';
import { BodyWeight } from '../../body_weights/entities/body_weights.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  display_name!: string;

  @Column({ nullable: true })
  avatar_url!: string;

  @Column({ default: true })
  is_active!: boolean;

  @CreateDateColumn({ type: 'datetime' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at!: Date;

  @OneToMany(() => OAuthAccount, (oauth) => oauth.user)
  oauthAccounts!: OAuthAccount[];

  @OneToMany(() => Session, (session) => session.user)
  sessions!: Session[];

  @OneToMany(() => Friendship, (f) => f.requester)
  sentFriendships!: Friendship[];

  @OneToMany(() => Friendship, (f) => f.addressee)
  receivedFriendships!: Friendship[];

  @OneToMany(() => Program, (p) => p.user)
  programs!: Program[];

  @OneToMany(() => Exercise, (e) => e.createdBy)
  exercises!: Exercise[];

  @OneToMany(() => WorkoutSession, (ws) => ws.user)
  workoutSessions!: WorkoutSession[];

  @OneToMany(() => BodyWeight, (bw) => bw.user)
  bodyWeights!: BodyWeight[];
}

