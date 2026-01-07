/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Injectable, Inject } from '@nestjs/common';
import type { InterfaceUserRepository } from './user.repository.interface';
import { USER_REPOSITORY } from './user.repository.token';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: InterfaceUserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne(id);
  }

  create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.create(dto);
  }

  update(id: number, dto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(id, dto);
  }
}
