import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Program } from "../programs/programs.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 191 })
    email: string;

    @Column({ length: 50 })
    name: string;

    @Column()
    password_hash: string;

    @Column({ length: 50, default: 'user' })
    role: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(() => Program, program => program.user_id)
    programs: Program[];
}