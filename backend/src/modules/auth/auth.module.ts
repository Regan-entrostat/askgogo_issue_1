import { PassportModule } from "@nestjs/passport";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AdminUserAuthService } from "./admin-user-auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    PassportModule.register({}),
    JwtModule.register({
      secret: "Config.SecurityConfig.jwt.secret",
      signOptions: {
        expiresIn: `${"Config.SecurityConfig.jwt.expirySeconds"}s`,
      },
    }),
  ],
  providers: [AdminUserAuthService],
  exports: [PassportModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes("*");
  }
}
