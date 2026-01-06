import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    PrismaModule, // PrismaService (global DB access)
    UsersModule, // users controller + service + repository
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
