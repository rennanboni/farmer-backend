import {Field, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryColumn} from "typeorm";

@ObjectType()
@Entity()
export class Address {

    @Field({nullable: false})
    @PrimaryColumn()
    id: string;

    @Field()
    @Column()
    street: string;

    @Field()
    @Column()
    state: string;

    @Field()
    @Column()
    address: string;

    @Field()
    @Column()
    country: string;
}
