import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  logger.log(`Port:[${AppModule.appPort}]`, 'Configuration');
  logger.log(`Enviroment:[${AppModule.appEnv}]`, 'Main');
  await app.listen(AppModule.appPort);
}
bootstrap();
