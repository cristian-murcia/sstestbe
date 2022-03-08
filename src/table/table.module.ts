import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Table } from 'src/entities';
import { TableController } from './table.controller';
import { TableService } from './services/table.service';

@Module({
    imports: [TypeOrmModule.forFeature([Table])],
    providers: [TableService],
    controllers: [TableController],
    exports: [TypeOrmModule]
})
export class TableModule { }
