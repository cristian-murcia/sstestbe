import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Columns } from './column-table';

@Entity('table')
export class Table {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        type => Columns,
        columns => columns.idTable
    )
    columns: Columns[]
}
