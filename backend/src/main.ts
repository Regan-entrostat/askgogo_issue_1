import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MikroORM } from "@mikro-orm/core";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Exception filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.enableCors();

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  // Migrations
  const orm: MikroORM = app.get(MikroORM);

  await app.listen(3035);
}
bootstrap();
