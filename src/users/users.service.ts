import { Injectable } from '@nestjs/common';
import type { InterfaceUserRepository } from './user.repository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: InterfaceUserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  update(id: number, dto: UpdateUserDto) {
    return this.userRepository.update(id, dto);
  }
}
