import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

import {Document} from "../model";
import {DocumentRepository} from "../repository";

@Injectable()
export class DocumentService {

    constructor(
        @InjectRepository(Document) private readonly repository: DocumentRepository
    ) {
    }

    async findById(id: string): Promise<Document | undefined> {
        return this.repository.findOne(id);
    }

}
