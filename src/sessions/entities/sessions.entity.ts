import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ unique: true })
  token_hash!: string;

  @Column({ type: 'text', nullable: true })
  device_info!: string;

  @Column({ type: 'varchar', nullable: true })
  ip_address!: string;

  @Column({ type: 'datetime' })
  expires_at!: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at!: Date;
}

