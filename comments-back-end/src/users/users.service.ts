import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  create(createUsersDto: CreateUsersDto) {
    // Implement user creation logic here
    console.log('Creating user with data:', createUsersDto);
  }
}
