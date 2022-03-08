import { MaxLength, } from 'class-validator';
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TableType } from './tableType';

@Entity('TableStructure')
export class TableStructure {
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
    @MaxLength(1)
    required: number;

    @ManyToOne(
        type => TableType,
        tableType => tableType.id
    )
    idTable: number
}