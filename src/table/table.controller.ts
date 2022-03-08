import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';

import { TableService } from './services/table.service';
import { TableDto } from './dto/table-dto';

@ApiTags('Table')
@Controller('table')
export class TableController {

    constructor(private readonly tableService: TableService) { }

    @Get()
    @ApiOkResponse({ description: "Success", type: TableDto })
    @ApiBadRequestResponse({ description: "Bad request", type: TableDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: TableDto })
    @ApiOperation({ summary: "Traer todas las tablas" })
    async getAllUser(
        @Res() res: Response
    ): Promise<void> {
        try {
            let result = await this.tableService.getAllTables();
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }

    @ApiOkResponse({ description: "Success", type: TableDto })
    @ApiBadRequestResponse({ description: "Bad request", type: TableDto })
    @ApiUnauthorizedResponse({ description: "Unauthorized", type: TableDto })
    @ApiParam({ name: "id", description: "Id de tabla", example: "1", type: Number })
    @ApiOperation({ summary: "Traer todas las columnas de una tabla por su id" })
    @Get(':id')
    async getColumnForIdTable(
        @Param('id') id: number,
        @Res() res: Response
    ): Promise<void> {

        try {
            let result = await this.tableService.getTableDetail(id);
            res.status(result.status).send(result);

        } catch (error) {
            throw error;
        }
    }


}
