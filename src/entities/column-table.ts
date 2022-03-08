import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Table } from './table';

@Entity('columns')
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    header: string;

    @Column()
    dataType: string;

    @Column()
    required: boolean;

    @ManyToOne(
        type => Table,
        table => table.id
    )
    idTable: number
}