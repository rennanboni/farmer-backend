import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Farmer } from './farmer.model';
import { FarmerRepository } from './farmer.repository';

@Injectable()
export class FarmerService {

  constructor(
    @InjectRepository(Farmer) private readonly repository: FarmerRepository,
  ) {
  }

  async findAllByNameLikeOrDocumentNumberLike(input: string): Promise<Farmer[]> {
    return this.repository.findAllByNameLikeOrDocumentNumberLike(input);
  }

  async findById(id: string): Promise<Farmer> {
    return this.repository.findOne(id);
  }
}
