import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Address } from './address.model';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(Address) private readonly repository: AddressRepository,
  ) {
  }

  async findById(id: string): Promise<Address | undefined> {
    return this.repository.findOne(id);
  }

}
