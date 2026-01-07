/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface InterfaceUserRepository {
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User | null>;
  create(data: CreateUserDto): Promise<User>;
  update(id: number, data: UpdateUserDto): Promise<User>;
}
