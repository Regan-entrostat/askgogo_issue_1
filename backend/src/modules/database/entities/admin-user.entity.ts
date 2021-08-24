import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Timestamped } from '@database/entities';

@Entity()
export class AdminUser extends Timestamped {
    @PrimaryKey({ columnType: 'int8' })
    adminUserId!: number;

    @Property({ length: 255 })
    name!: string;

    @Unique({ name: 'admin_user_email_unique' })
    @Property({ length: 255 })
    email!: string;

    @Property({ columnType: 'timestamp', nullable: true })
    emailVerifiedAt?: Date;

    @Property({ length: 255 })
    password!: string;

    @Property({ length: 100, nullable: true })
    rememberToken?: string;
}
