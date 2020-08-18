import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {TypeOrmModule} from "@nestjs/typeorm";

import {FarmerResolver} from "./resolver/farmer.resolver";

import {AddressService, DocumentService, FarmerService} from "./service";
import {AddressRepository, DocumentRepository, FarmerRepository} from "./repository";
import {Address, Document, Farmer} from "./model";

@Module({
    controllers: [],
    providers: [
        // Resolvers
        FarmerResolver,

        // Services
        FarmerService, DocumentService, AddressService
    ],
    imports: [
        TypeOrmModule.forRoot( {
            type: 'postgres',
            host: process.env.DB_TYPE || 'localhost',
            port: parseInt(process.env.DB_PORT || '15432'),
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'Postgres2019!',
            autoLoadEntities: true,
            synchronize: true
        }),
        TypeOrmModule.forFeature([Address, AddressRepository]),
        TypeOrmModule.forFeature([Document, DocumentRepository]),
        TypeOrmModule.forFeature([Farmer, FarmerRepository]),


        GraphQLModule.forRoot({
            autoSchemaFile: true,
            playground: true
        }),
    ],
})
export class AppModule {
}
