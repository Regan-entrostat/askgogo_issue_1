import { DeviceModule } from "../device/device.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ProfanityCheckService } from "@shared/services/profanity-check.service";
import { ThrottlerInterceptor } from "@shared/interceptors/throttler.interceptor";
import { DatabaseModule } from "@database/database.module";
import { AccountUserTrackerModule } from "../account-user-tracker/account-user-tracker.module";
import { ThrottleStorageService } from "@shared/services/throttler-storage.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  imports: [DatabaseModule, DeviceModule, AccountUserTrackerModule],
  providers: [
    ThrottleStorageService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ThrottlerInterceptor,
    },
    ProfanityCheckService,
  ],
  exports: [
    DatabaseModule,
    ThrottleStorageService,
    DeviceModule,
    ProfanityCheckService,
    AccountUserTrackerModule,
  ],
})
export class SharedModule {}
