import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './config';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);

  // Set global prefix
  app.setGlobalPrefix('api');

  // Enable Cors
  app.enableCors();

  // Use helmet for basic security
  app.use(helmet());

  // Enable response compression
  app.use(compression());

  // Use global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Create a logger instance
  const logger = new Logger('Bootstrap');

  // Start the application

  const port = configService.getPort() || 3000;
  await app.listen(port);

  logger.log(
    `\n\n ..:: Application is running on: http://localhost:${port}/ \n\n`,
  );
}
bootstrap();
