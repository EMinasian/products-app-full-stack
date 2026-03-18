import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUsersDto: CreateUsersDto): Promise<User> {
    const defaultUsername =
      `${createUsersDto.firstname.trim()}${createUsersDto.lastname.trim()}`.toLowerCase();

    try {
      return await this.prismaService.user.create({
        data: {
          ...createUsersDto,
          password: await bcrypt.hash(createUsersDto.password, 10),
          username: defaultUsername,
        },
      });
    } catch (error) {
      if ((error as { code: string })?.code === 'P2002') {
        throw new UnprocessableEntityException('The user already exists!');
      }

      throw error;
    }
  }
}
