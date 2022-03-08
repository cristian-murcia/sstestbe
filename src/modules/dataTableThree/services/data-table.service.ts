import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TableDataThree } from 'src/entities';
import { IResponse } from 'src/shared/interfaces/response';
import { DataTableThreeDto } from '../dto/data-table-three-dto';

@Injectable()
export class DataTableThreeService {

    constructor(
        @InjectRepository(TableDataThree)
        private readonly tableDataThreeRepository: Repository<TableDataThree>,
    ) { }

    /**
     * Get all register for table
     * @returns 
     */
    public async getAllRegisters(): Promise<IResponse> {
        try {
            let tables: Array<TableDataThree> = await this.tableDataThreeRepository.find();

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
    * @param data DataTableThreeDto
    * @returns 
    */
    public async createRegister(data: DataTableThreeDto): Promise<IResponse> {
        try {
            const dataTableThree = new TableDataThree;
            dataTableThree.t3c1 = data.t3c1;
            dataTableThree.t3c2 = data.t3c2;
            dataTableThree.t3c3 = data.t3c3;

            let rowCreated = await this.tableDataThreeRepository.save(dataTableThree);

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
     * @param data DataTableThreeDto
     * @returns 
     */
    public async updateRegister(id: number, data: DataTableThreeDto): Promise<IResponse> {
        try {

            let existRow: DataTableThreeDto = await this.tableDataThreeRepository.findOne(id);

            if (!existRow) {
                throw new NotFoundException('No se encontro el registro a actualizar');
            }

            const dataTableThree = new TableDataThree;
            dataTableThree.t3c1 = id;
            dataTableThree.t3c2 = data.t3c2;
            dataTableThree.t3c3 = data.t3c3;

            let { affected, raw, generatedMaps } = await this.tableDataThreeRepository.update(id, dataTableThree);

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
            let { affected } = await this.tableDataThreeRepository.delete(id);

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
