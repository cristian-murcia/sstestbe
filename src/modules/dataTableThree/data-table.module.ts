import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TableDataThree } from 'src/entities';
import { DataTableController } from './data-table.controller';
import { DataTableThreeService } from './services/data-table.service';

@Module({
  imports: [TypeOrmModule.forFeature([TableDataThree])],
  providers: [DataTableThreeService],
  controllers: [DataTableController],
  exports: [TypeOrmModule]
})
export class DataTableThreeModule { }
