import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUsersDto: CreateUsersDto) {
    // Implement user creation logic here
    console.log('Creating user with data:', createUsersDto);
  }
}
