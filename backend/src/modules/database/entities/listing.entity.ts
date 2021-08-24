import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { Timestamped } from '@entities';

export enum ListingStatus {
    live = 'live',
    expired = 'expired',
    pending = 'pending',
}

export enum ListingDetails {}

@Entity()
export class Listing extends Timestamped {
    @PrimaryKey()
    listingId!: number;

    @Property()
    description!: string;

    @Property()
    title!: string;

    @Enum({
        items: () => ListingStatus,
        default: ListingStatus.pending,
    })
    status!: ListingStatus;

    @Property({ columnType: 'jsonb', nullable: true, default: null })
    details?: string;
}
