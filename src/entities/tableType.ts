import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { TableStructure } from './tableStructure';

@Entity('TableType')
export class TableType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        type => TableStructure,
        tableStructure => tableStructure.idTable
    )
    columns: TableStructure[]
}
