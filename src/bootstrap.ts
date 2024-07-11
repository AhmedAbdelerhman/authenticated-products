import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import { ThrottlerGuard } from '@nestjs/throttler';
import { LoggingInterceptor } from './libs/interceptor/logging.interceptor';

export async function bootstrap() {

  let app: any;

  app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  const config = new DocumentBuilder()
    .setTitle('authenticated products')
    .setDescription('try authentication process  (get products after login)')
    .setVersion('1.0')
    .addBearerAuth() // Enable JWT authentication in Swagger UI
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(process.env.PORT || 3000, async () => {

    console.log(`Application has been started at ${await app.getUrl()}`);
  });

}
