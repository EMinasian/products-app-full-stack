import { IsString, Length } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(1, 255)
  firstName: string;

  @IsString()
  @Length(1, 255)
  lastName: string;

  @IsString()
  @Length(1, 255)
  username: string;

  @IsString()
  profilePictureUrl: string;
}
