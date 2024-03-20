import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const corsOptions: CorsOptions = {
    origin: '*', // You can change this to your specific origins
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // Specify the HTTP methods that are allowed
    allowedHeaders: '*', // Specify which headers can be sent in the request
    exposedHeaders: '*', // Specify the headers that the client is allowed to access
  };

  app.enableCors(corsOptions);
  await app.listen(5019);
}
bootstrap();
