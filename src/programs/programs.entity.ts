import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "../users/users.entity";

@Entity('programs')
export class Program {

    @PrimaryGeneratedColumn()
    program_id: number;

    @Column()
    user_id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100 })
    goal: string;

    @Column()
    duration: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToOne(() => User, user => user.programs)
    @JoinColumn({ name: 'user_id' })
    user: User;
}

