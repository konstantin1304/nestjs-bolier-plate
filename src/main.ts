import { NestFactory } from '@nestjs/core';
// import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Enable CORS
  // const corsOptions: CorsOptions = {
  //   origin: '*', // You can change this to your specific origins
  //   methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // Specify the HTTP methods that are allowed
  //   allowedHeaders: '*', // Specify which headers can be sent in the request
  //   exposedHeaders: '*', // Specify the headers that the client is allowed to access
  // };
  app.enableCors();

  await app.listen(5019);
}
bootstrap();
