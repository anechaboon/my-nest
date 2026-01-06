import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ตัด field ที่ไม่ได้อยู่ใน DTO
      forbidNonWhitelisted: true, // ถ้ามี field แปลก → error
      transform: true, // แปลง type อัตโนมัติ (string -> number)
    }),
  );

  await app.listen(3000);
}
bootstrap();
