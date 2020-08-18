import { EntityRepository, Repository } from 'typeorm';

import { Document } from './document.model';

@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {

}
