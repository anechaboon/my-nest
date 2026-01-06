import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService], // สำคัญ: เพื่อให้ Module อื่นใช้ได้
})
export class UserModule {}
