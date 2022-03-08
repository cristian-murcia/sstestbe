import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TableDataOne } from 'src/entities';
import { IResponse } from 'src/shared/interfaces/response';
import { DataTableOneDto } from '../dto/data-table-one-dto';

@Injectable()
export class DataTableOneService {

    constructor(
        @InjectRepository(TableDataOne)
        private readonly tableDataOneRepository: Repository<TableDataOne>,
    ) { }

    /**
     * Get all register for table
     * @returns 
     */
    public async getAllRegisters(): Promise<IResponse> {
        try {
            let tables: Array<TableDataOne> = await this.tableDataOneRepository.find();

            return {
                status: HttpStatus.OK,
                message: "Registros consultados con éxito",
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
    * Create registro in table One 
    * @param data DataTableOneDto
    * @returns 
    */
    public async createRegister(data: DataTableOneDto): Promise<IResponse> {
        try {
            const dataTableOne = new TableDataOne;
            dataTableOne.t1c1 = data.t1c1;
            dataTableOne.t1c2 = data.t1c2;
            dataTableOne.t1c3 = data.t1c3;
            dataTableOne.t1c4 = data.t1c4;

            let rowCreated = await this.tableDataOneRepository.save(dataTableOne);

            return {
                status: HttpStatus.OK,
                message: "Registro creado con éxito",
                result: rowCreated
            }

        } catch (error) {
            if (error instanceof InternalServerErrorException) {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

            throw error;
        }
    }

    /**
     * Update register for id
     * @param data DataTableOneDto
     * @returns 
     */
    public async updateRegister(id: number, data: DataTableOneDto): Promise<IResponse> {
        try {

            let existRow: TableDataOne = await this.tableDataOneRepository.findOne(id);

            if (!existRow) {
                throw new NotFoundException('No se encontro el registro a actualizar');
            }

            const dataTableOne = new TableDataOne;
            dataTableOne.t1c1 = id;
            dataTableOne.t1c2 = data.t1c2;
            dataTableOne.t1c3 = data.t1c3;
            dataTableOne.t1c4 = data.t1c4;
            let { affected, raw, generatedMaps } = await this.tableDataOneRepository.update(id, dataTableOne);

            if (affected > 0) {
                return {
                    status: HttpStatus.OK,
                    message: "Registro actualizado con éxito",
                    result: data
                }
            } else {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

        } catch (error) {
            if (error instanceof InternalServerErrorException) {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

            throw error;
        }
    }

    /**
     * Delete register for id
     * @param id number
     * @returns 
     */
    public async deleteRegisterForId(id: number): Promise<IResponse> {
        try {
            let { affected } = await this.tableDataOneRepository.delete(id);

            if (affected > 0) {
                return {
                    status: HttpStatus.OK,
                    message: "Registro eliminado con éxito",
                    result: null
                }
            } else {
                throw new NotFoundException('No se ha encontrado el registro a eliminar')
            }

        } catch (error) {
            if (error instanceof InternalServerErrorException) {
                throw new InternalServerErrorException('Ha ocurrido un error interno, intente de nuevo');
            }

            throw error;
        }
    }


}
