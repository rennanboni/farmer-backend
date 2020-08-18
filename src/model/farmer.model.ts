import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";

import {Address} from "./address.model";
import {Document} from "./document.model";

@ObjectType()
@Entity()
export class Farmer {
    @Field(type => ID)
    @PrimaryColumn()
    id: string;

    @Field({nullable: false})
    @Column()
    name: string;

    @Column()
    id_document: string;

    @Column()
    id_address: string;

    @Field(type => Document, {nullable: true})
    @OneToOne(type => Document)
    @JoinColumn({name: 'id_document'})
    document?: Document;

    @Field(type => Address, {nullable: true})
    @OneToOne(type => Address)
    @JoinColumn({name: 'id_address'})
    address?: Address;
}
