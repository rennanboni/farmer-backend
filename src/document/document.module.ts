import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Document } from './document.model';
import { DocumentRepository } from './document.repository';
import { DocumentService } from './document.service';

@Module({
  controllers: [],
  providers: [
    // Services
    DocumentService,
  ],
  exports: [
    // Services
    DocumentService,
  ],
  imports: [
    TypeOrmModule.forFeature([Document, DocumentRepository]),
  ],
})
export class DocumentModule {

}
