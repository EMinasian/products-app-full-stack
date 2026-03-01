import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

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
}
