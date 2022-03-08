import { IsDate, MaxLength, } from 'class-validator';
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TableDataThree')
export class TableDataThree {
    @PrimaryGeneratedColumn()
    t3c1: number;

    @Column()
    @MaxLength(50)
    t3c2: string;

    @Column()
    @IsDate()
    t3c3: Date;
}