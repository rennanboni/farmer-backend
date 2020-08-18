import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Document {

  @Field({ nullable: false })
  @PrimaryColumn()
  id: string;

  @Field({ nullable: false })
  @Column()
  documentNumber: string;

  @Field({ nullable: false })
  @Column()
  documentType: string;
}
