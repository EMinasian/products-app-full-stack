import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body(new ValidationPipe({ whitelist: true }))
    createUsersDto: CreateUsersDto,
  ) {
    return this.usersService.create(createUsersDto);
  }

  @Get('current')
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: TokenPayload) {
    return user;
  }
}
