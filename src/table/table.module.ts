import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Columns, Table } from 'src/entities';
import { TableController } from './table.controller';
import { TableService } from './services/table.service';

@Module({
    imports: [TypeOrmModule.forFeature([Table, Columns])],
    providers: [TableService],
    controllers: [TableController],
    exports: [TypeOrmModule]
})
export class TableModule { }
