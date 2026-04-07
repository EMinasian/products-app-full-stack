import { IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @Length(1, 255)
  title: string;

  @IsString()
  content: string;

  @IsString()
  authorId: string;
}
