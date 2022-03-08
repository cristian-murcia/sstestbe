import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { HttpExceptionFilter } from './shared/exceptions/exception-standar';
import { ConnectionService } from './database/connection.service';
import { TableModule } from './modules/table/table.module';
import { DataTableOneModule } from './modules/dataTableOne/data-table.module';
import { DataTableTwoModule } from './modules/dataTableTwo/data-table.module';

@Module({
  imports: [
    TableModule,
    TypeOrmModule.forRootAsync({
      useClass: ConnectionService
    }),
    TableModule,
    DataTableOneModule,
    DataTableTwoModule,
  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule { }
