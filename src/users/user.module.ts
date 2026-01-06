import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaUserRepository } from './prisma-user.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    UsersService,
    {
      provide: 'InterfaceUserRepository',
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
