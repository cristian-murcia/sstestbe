import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Columns, Table } from '../entities';

@Injectable()
export class ConnectionService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'sstest-be',
            synchronize: false, //true for create
            dropSchema: false,
            entities: [Columns, Table],
        } as TypeOrmModuleOptions;
    }
}
