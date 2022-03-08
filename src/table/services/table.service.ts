import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Columns, Table } from 'src/entities';
import { IResponse } from 'src/shared/interfaces/response';
import { Repository } from 'typeorm';

@Injectable()
export class TableService {

    constructor(
        @InjectRepository(Table)
        private readonly tableRepository: Repository<Table>,

        @InjectRepository(Columns)
        private readonly columnRepository: Repository<Columns>,
    ) { }

    /**
     * Get all the tables
     * @returns 
     */
    public async getAllTables(): Promise<IResponse> {
        try {
            let tables: Array<Table> = await this.tableRepository.find();

            return {
                status: HttpStatus.OK,
                message: "Tablas consultados con éxito",
                result: tables
            }

        } catch (error) {
            if (error instanceof InternalServerErrorException) {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

            throw error;
        }
    }

    /**
     * Get column for id table
     * @returns 
     */
    public async getTableDetail(idTable: number): Promise<IResponse> {
        try {

            let existTable: Table = await this.tableRepository.findOne(idTable);

            if (!existTable) {
                throw new NotFoundException('La tabla con ese id no existe');
            }

            let columns: Array<Columns> = await this.columnRepository.find({
                where: {
                    idTable: idTable
                }
            });

            if (columns) {
                existTable.columns = columns;
                return {
                    status: HttpStatus.OK,
                    message: `Columnas de la tabla con id ${idTable}`,
                    result: existTable
                }
            }

        } catch (error) {
            if (error instanceof InternalServerErrorException) {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

            throw error;
        }
    }

}
