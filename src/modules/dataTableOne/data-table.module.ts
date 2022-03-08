import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableDataOne } from 'src/entities';

import { DataTableController } from './data-table.controller';
import { DataTableOneService } from './services/data-table.service';

@Module({
  imports: [TypeOrmModule.forFeature([TableDataOne])],
  providers: [DataTableOneService],
  controllers: [DataTableController],
  exports: [TypeOrmModule]
})
export class DataTableOneModule { }
