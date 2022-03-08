import { Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';

import { DataTableThreeDto } from './dto/data-table-three-dto';
import { DataTableThreeService } from './services/data-table.service';


@ApiTags('Data table Three')
@Controller('tableThree')
export class DataTableController {

    constructor(private readonly dataTableService: DataTableThreeService) { }

    @Get()
    @ApiOkResponse({ description: "Success", type: DataTableThreeDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableThreeDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableThreeDto })
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

    @ApiOkResponse({ description: "Success", type: DataTableThreeDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableThreeDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableThreeDto })
    @ApiOperation({ summary: "Crear un nuevo registro en la tabla 3" })
    @Post()
    async createRegister(
        @Body(new ValidationPipe()) row: DataTableThreeDto,
        @Res() res: Response
    ): Promise<void> {
        try {
            let result = await this.dataTableService.createRegister(row);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }

    @ApiOkResponse({ description: "Success", type: DataTableThreeDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableThreeDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableThreeDto })
    @ApiParam({ name: "id", description: "Id del registro a actualizar", example: "1" })
    @ApiOperation({ summary: "Actualizar un registro existente" })
    @Put(':id')
    async updateRegister(
        @Param('id') id: number,
        @Body(new ValidationPipe()) createUserDto: DataTableThreeDto,
        @Res() res: Response
    ): Promise<void> {

        try {
            let result = await this.dataTableService.updateRegister(id, createUserDto);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }

    }

    @ApiOkResponse({ description: "Success", type: DataTableThreeDto })
    @ApiBadRequestResponse({ description: "Bad request", type: DataTableThreeDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: DataTableThreeDto })
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
