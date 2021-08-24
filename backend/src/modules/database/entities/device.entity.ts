import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Timestamped } from '@entities/timestamped.entity';

@Entity()
export class Device extends Timestamped {
    @PrimaryKey()
    deviceId!: number;

    @Property()
    @Unique()
    identifier!: string;

}

