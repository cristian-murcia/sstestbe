import { Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';

import { DataTableOneDto } from './dto/data-table-one-dto';
import { DataTableOneService } from './services/data-table.service';


@ApiTags('Data table One')
@Controller('tableOne')
export class DataTableController {

    constructor(private readonly dataTableService: DataTableOneService) { }

    @Get()
    @ApiOkResponse({ description: "Success", type: DataTableOneDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableOneDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableOneDto })
    @ApiOperation({ summary: "Traer todas los registros de la tabla" })
    async getAllRegister(
        @Res() res: Response
    ): Promise<void> {
        try {
            let result = await this.dataTableService.getAllRegisters();
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }

    @ApiOkResponse({ description: "Success", type: DataTableOneDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableOneDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableOneDto })
    @ApiOperation({ summary: "Crear un nuevo registro en la tabla 1" })
    @Post()
    async createRegister(
        @Body(new ValidationPipe()) row: DataTableOneDto,
        @Res() res: Response
    ): Promise<void> {
        try {
            let result = await this.dataTableService.createRegister(row);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }

    @ApiOkResponse({ description: "Success", type: DataTableOneDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableOneDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableOneDto })
    @ApiParam({ name: "id", description: "Id del registro a actualizar", example: "1" })
    @ApiOperation({ summary: "Actualizar un registro existente" })
    @Put(':id')
    async updateRegister(
        @Param('id') id: number,
        @Body(new ValidationPipe()) createUserDto: DataTableOneDto,
        @Res() res: Response
    ): Promise<void> {

        try {
            let result = await this.dataTableService.updateRegister(id, createUserDto);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }

    }

    @ApiOkResponse({ description: "Success", type: DataTableOneDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableOneDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableOneDto })
    @ApiParam({ name: "id", description: "Id del registro a eliminar", example: "1" })
    @ApiOperation({ summary: "Eliminar un registro existente" })
    @Delete(':id')
    async deleteRegisterForId(
        @Param('id') idRegister: number,
        @Res() res: Response
    ): Promise<void> {

        try {
            let result = await this.dataTableService.deleteRegisterForId(idRegister);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }

}
