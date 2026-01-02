import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Program } from "../programs/programs.entity";
import { Day } from "../days/days.entity";


@Entity('programs_days')
export class ProgramDay {

    @PrimaryColumn()
    program_id: number;

    @PrimaryColumn()
    day_id: number;

    @Column({ type: 'tinyint' })
    day_order: number;

    @ManyToOne(() => Program, program => program.program_days, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'program_id' })
    program: Program;

    @ManyToOne(() => Day, day => day.program_days)
    @JoinColumn({ name: 'day_id' })
    day: Day;

}
