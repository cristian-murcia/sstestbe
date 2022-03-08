import { IsDate, MaxLength, } from 'class-validator';
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TableDataOne')
export class TableDataOne {
    @PrimaryGeneratedColumn()
    t1c1: number;

    @Column()
    @MaxLength(50)
    t1c2: string;

    @Column()
    t1c3?: number;

    @Column()
    @IsDate()
    t1c4?: Date;
}