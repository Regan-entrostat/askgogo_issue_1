import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { AdminUser, DataUsage, Device, Listing } from "@entities";
import { Profanity } from "@entities/admin/profanity.entity";
import OrmConfig from "../../config/orm.config";

@Module({
  imports: [
    MikroOrmModule.forRoot(OrmConfig),
    MikroOrmModule.forFeature([
      //
      AdminUser,
      DataUsage,
      Device,
      Listing,
      Profanity,
    ]),
  ],
  exports: [MikroOrmModule],
})
export class DatabaseModule {}
