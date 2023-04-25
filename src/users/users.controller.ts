import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { User } from '.prisma/client';
import { GetUser } from '../auth/decorator';

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
