import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(filter: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: filter,
    });
  }

  async create(createUsersDto: CreateUsersDto) {
    const defaultUsername =
      `${createUsersDto.firstname.trim()}${createUsersDto.lastname.trim()}`.toLowerCase();

    try {
      return await this.prismaService.user.create({
        data: {
          ...createUsersDto,
          password: await bcrypt.hash(createUsersDto.password, 10),
          username: defaultUsername,
        },
        select: {
          email: true,
          firstname: true,
          lastname: true,
          profilePictureUrl: true,
          username: true,
          id: true,
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
