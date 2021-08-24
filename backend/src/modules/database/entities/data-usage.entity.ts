import { Entity, JsonType, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import {Timestamped} from "@entities/timestamped.entity";

export class DataUsageDetails {
    @Expose()
    @IsString()
    endpoint: string;
}

@Entity()
export class DataUsage extends Timestamped {
    @PrimaryKey()
    dataUsageId!: number;

    @Property({ type: 'double' })
    data_usage!: number;

    @Property({ type: JsonType, nullable: true })
    details?: Partial<DataUsageDetails>;

}
