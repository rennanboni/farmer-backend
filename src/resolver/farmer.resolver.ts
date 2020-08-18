import {Args, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";

import {Address, Document, Farmer} from "../model";
import {AddressService, DocumentService, FarmerService} from "../service";

@Resolver(of => Farmer)
export class FarmerResolver {

    constructor(
        private farmerService: FarmerService,
        private addressService: AddressService,
        private documentService: DocumentService,
    ) {}

    @Query(returns => [Farmer])
    async farmers(
        @Args('input') input: string
        ): Promise<Farmer[]> {

        return this.farmerService.findAllByNameLikeOrDocumentNumberLike(input);
    }

    @Query(returns => Farmer)
    async farmer(
        @Args('id') id: string
    ) {

        return this.farmerService.findById(id);
    }

    @ResolveField()
    async address(@Parent() farmer: Farmer): Promise<Address | undefined> {
        const { id_address } = farmer;
        return this.addressService.findById(id_address);
    }

    @ResolveField()
    async document(@Parent() farmer: Farmer): Promise<Document | undefined> {
        const { id_document } = farmer;
        return this.documentService.findById(id_document);
    }
}
