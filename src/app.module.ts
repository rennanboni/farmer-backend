import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { DocumentModule } from './document/document.module';
import { FarmerModule } from './farmer/farmer.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    // Graphql
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),

    // Database connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      autoLoadEntities: true,
      synchronize: process.env.DB_SYNC ? process.env.DB_SYNC === 'true' : true,
    }),

    // Modules
    AddressModule, DocumentModule, FarmerModule,
  ],
})
export class AppModule {
}
