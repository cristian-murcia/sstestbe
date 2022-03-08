import { IsDate, MaxLength, } from 'class-validator';
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TableDataTwo')
export class TableDataTwo {
    @PrimaryGeneratedColumn()
    t2c1: number;

    @Column()
    @MaxLength(50)
    t2c2?: string;

    @Column()
    t2c3?: number;

    @Column()
    @IsDate()
    t2c4: Date;

    @Column()
    t2c5: number;
}