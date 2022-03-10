import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { TableType, TableStructure, TableDataOne, TableDataTwo, TableDataThree  } from '../entities';

@Injectable()
export class ConnectionService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'sql10.freesqldatabase.com', //'localhost',
            port: 3306,
            username: 'sql10478033', //'root',
            password: '8qXx5d6EcC',
            database: 'sql10478033',//'sstest-be',
            synchronize: false, //true for create
            dropSchema: false,
            entities: [TableType, TableStructure, TableDataOne, TableDataTwo, TableDataThree],
        } as TypeOrmModuleOptions;
    }
}
