import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { HttpExceptionFilter } from './shared/exceptions/exception-standar';
import { ConnectionService } from './database/connection.service';
import { TableModule, DataTableOneModule, DataTableTwoModule, DataTableThreeModule } from './modules';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: ConnectionService
    }),
    TableModule,
    DataTableOneModule,
    DataTableTwoModule,
    DataTableThreeModule,
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
