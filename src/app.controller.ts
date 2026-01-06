import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './users/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  // get all users
  @Get('users')
  getUsers() {
    return this.userService.findAll();
  }

  // get user by id
  @Get('user/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }

  // create user
  @Post('user')
  signupUser(@Body() userData: { name?: string; email: string }) {
    return this.userService.createUser(userData);
  }
}
