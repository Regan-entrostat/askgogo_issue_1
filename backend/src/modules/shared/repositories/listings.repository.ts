import { Injectable } from '@nestjs/common';
import { Repository } from '@mikro-orm/core';
import { Listing, ListingStatus } from '@entities';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
@Repository(Listing)
export class ListingRepository extends EntityRepository<Listing> {

}
