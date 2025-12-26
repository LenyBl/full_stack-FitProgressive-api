import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}