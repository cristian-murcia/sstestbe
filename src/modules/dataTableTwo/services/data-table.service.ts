import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TableDataTwo } from 'src/entities';
import { IResponse } from 'src/shared/interfaces/response';
import { DataTableTwoDto } from '../dto/data-table-two-dto';

@Injectable()
export class DataTableTwoService {

    constructor(
        @InjectRepository(TableDataTwo)
        private readonly tableDataTwoRepository: Repository<TableDataTwo>,
    ) { }

    /**
     * Get all register for table
     * @returns 
     */
    public async getAllRegisters(): Promise<IResponse> {
        try {
            let tables: Array<TableDataTwo> = await this.tableDataTwoRepository.find();

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
    * @param data DataTableTwoDto
    * @returns 
    */
    public async createRegister(data: DataTableTwoDto): Promise<IResponse> {
        try {
            const dataTableTwo = new TableDataTwo;
            dataTableTwo.t2c1 = data.t2c1;
            dataTableTwo.t2c2 = data.t2c2;
            dataTableTwo.t2c3 = data.t2c3;
            dataTableTwo.t2c4 = data.t2c4;
            dataTableTwo.t2c5 = data.t2c5;

            let rowCreated = await this.tableDataTwoRepository.save(dataTableTwo);

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
     * @param data DataTableTwoDto
     * @returns 
     */
    public async updateRegister(id: number, data: DataTableTwoDto): Promise<IResponse> {
        try {

            let existRow: TableDataTwo = await this.tableDataTwoRepository.findOne(id);

            if (!existRow) {
                throw new NotFoundException('No se encontro el registro a actualizar');
            }

            const dataTableTwo = new TableDataTwo;
            dataTableTwo.t2c1 = id;
            dataTableTwo.t2c2 = data.t2c2;
            dataTableTwo.t2c3 = data.t2c3;
            dataTableTwo.t2c4 = data.t2c4;
            dataTableTwo.t2c5 = data.t2c5;

            let { affected, raw, generatedMaps } = await this.tableDataTwoRepository.update(id, dataTableTwo);

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
            let { affected } = await this.tableDataTwoRepository.delete(id);

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
