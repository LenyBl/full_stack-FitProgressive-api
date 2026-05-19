import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';

@Entity('friendships')
export class Friendship {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  requester_id!: string;

  @ManyToOne(() => User, (user) => user.sentFriendships, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'requester_id' })
  requester!: User;

  @Column()
  addressee_id!: string;

  @ManyToOne(() => User, (user) => user.receivedFriendships, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'addressee_id' })
  addressee!: User;

  @Column()
  status!: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at!: Date;
}

