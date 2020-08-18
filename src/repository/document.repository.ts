import {EntityRepository, Repository} from "typeorm";

import {Document} from "../model";

@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {

}
