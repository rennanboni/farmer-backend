import { EntityRepository, Repository } from 'typeorm';

import { Farmer } from './farmer.model';

@EntityRepository(Farmer)
export class FarmerRepository extends Repository<Farmer> {

  async findAllByNameLikeOrDocumentNumberLike(input: string): Promise<Farmer[]> {
    return this.createQueryBuilder('farmer')
      .leftJoinAndSelect('farmer.document', 'document')
      .andWhere(`farmer.name ILIKE '%${input}%'`)
      .orWhere(`document.documentNumber ILIKE '%${input}%'`)
      .getMany();
  }
}
