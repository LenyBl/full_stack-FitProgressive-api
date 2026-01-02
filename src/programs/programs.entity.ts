import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../users/users.entity";

@Entity('programs')
export class Program {

    @PrimaryGeneratedColumn()
    program_id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100 })
    goal: string;

    @Column()
    duration: number;

    @ManyToOne(() => User, user => user.programs, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
