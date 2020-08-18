import { EntityRepository, Repository } from 'typeorm';

import { Address } from './address.model';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {

}
