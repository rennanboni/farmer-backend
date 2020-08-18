import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Address } from './address.model';
import { AddressService } from './address.service';
import { AddressRepository } from './address.repository';

@Module({
  controllers: [],
  providers: [
    // Services
    AddressService,
  ],
  exports: [
    // Services
    AddressService
  ],
  imports: [
    TypeOrmModule.forFeature([Address, AddressRepository]),
  ],
})
export class AddressModule {

}
