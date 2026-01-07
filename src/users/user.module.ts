import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaUserRepository } from './prisma-user.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { USER_REPOSITORY } from './user.repository.token';

@Module({
  imports: [PrismaModule],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
