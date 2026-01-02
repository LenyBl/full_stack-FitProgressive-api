import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Program } from "../programs/programs.entity";
import { ExerciseLog } from "src/exercise_logs/exercise_logs.entity";
import { Provider } from "src/providers/providers.entity";

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

    @OneToMany(() => Program, program => program.user)
    programs: Program[];

    @OneToMany(() => ExerciseLog, exerciseLog => exerciseLog.user)
    exercise_logs: ExerciseLog[];

    @OneToMany(() => Provider, provider => provider.user)
    providers: Provider[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
