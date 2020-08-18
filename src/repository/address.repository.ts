import {EntityRepository, Repository} from "typeorm";

import {Address} from "../model";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {

}
