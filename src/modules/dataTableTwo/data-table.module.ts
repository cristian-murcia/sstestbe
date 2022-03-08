import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableDataTwo } from 'src/entities';

import { DataTableController } from './data-table.controller';
import { DataTableTwoService } from './services/data-table.service';

@Module({
  imports: [TypeOrmModule.forFeature([TableDataTwo])],
  providers: [DataTableTwoService],
  controllers: [DataTableController],
  exports: [TypeOrmModule]
})
export class DataTableTwoModule { }
