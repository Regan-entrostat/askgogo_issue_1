import { Module } from "@nestjs/common";
import { SharedModule } from "@shared/shared.module";
import { AppController } from "./app.controller";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
