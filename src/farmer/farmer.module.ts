import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Farmer } from './farmer.model';
import { FarmerRepository } from './farmer.repository';
import { FarmerResolver } from './farmer.resolver';
import { FarmerService } from './farmer.service';
import { AddressModule } from '../address/address.module';
import { DocumentModule } from '../document/document.module';

@Module({
  controllers: [],
  providers: [
    // Resolvers
    FarmerResolver,

    // Services
    FarmerService,
  ],
  exports: [
    // Resolvers
    FarmerResolver,

    // Services
    FarmerService,
  ],
  imports: [
    TypeOrmModule.forFeature([Farmer, FarmerRepository]),

    AddressModule, DocumentModule
  ]
})
export class FarmerModule {

}
