import { MaxLength, } from 'class-validator';
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Table } from './table';

@Entity('column')
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MaxLength(20)
    header: string;

    @Column()
    @MaxLength(10)
    dataType: string;

    @Column()
    @MaxLength(20)
    format: string;

    @Column()
    required: boolean;

    @ManyToOne(
        type => Table,
        table => table.id
    )
    idTable: number
}