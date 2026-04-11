import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(1, 255)
  firstname!: string;

  @IsString()
  @Length(1, 255)
  lastname!: string;

  @IsOptional()
  @IsString()
  profilePictureUrl?: string;

  @IsString()
  @Length(1, 255)
  @IsEmail()
  email!: string;

  @IsString()
  @Length(8, 255)
  @IsStrongPassword()
  password!: string;
}
