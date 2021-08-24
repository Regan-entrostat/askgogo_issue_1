import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { SharedModule } from "@shared/shared.module";
import { AppController } from "./app.controller";
import { NetworkInterceptorModelService } from "@shared/services/network-interceptor-model.service";
import { NetworkLoggerInterceptor } from "@shared/interceptors/network-logger.interceptor";

@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [
    NetworkInterceptorModelService,
    {
      provide: APP_INTERCEPTOR,
      useClass: NetworkLoggerInterceptor,
    },
  ],
})
export class AppModule {}
