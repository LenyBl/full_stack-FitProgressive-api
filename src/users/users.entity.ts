import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 191 })
    google_id: string;
    
    @Column({ length: 191 })
    email: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    provider: string;

    @Column({ length: 50, default: 'user' })
    role: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}