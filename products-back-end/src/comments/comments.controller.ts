import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentResponseDto } from './dto/response-comment.dto';
import { CommentsService } from './comments.service';
import type { UUID } from 'crypto';
import { CommentsGuard } from './comments.guard';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  // Get /comments
  @Get()
  findAll(@Query('cursor') cursor: string): {
    items: CommentResponseDto[];
    endCursor: string;
  } {
    return this.commentsService.findAll(cursor);
  }

  // Get /comments/:id
  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: UUID,
  ): CommentResponseDto | undefined {
    try {
      return this.commentsService.findOne(id);
    } catch (error) {
      // When database is integrated, add the typeof error check
      throw new NotFoundException((error as Error)?.message);
    }
  }

  // Post /comments/
  @Post()
  create(
    @Body(new ValidationPipe({ whitelist: true }))
    createCommentDto: CreateCommentDto,
  ): CommentResponseDto {
    return this.commentsService.create(createCommentDto);
  }

  // Put /comments/:id
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body(new ValidationPipe({ whitelist: true }))
    updateCommentDto: UpdateCommentDto,
  ): CommentResponseDto | undefined {
    try {
      return this.commentsService.update(id, updateCommentDto);
    } catch (error) {
      // When database is integrated, add the typeof error check
      throw new NotFoundException((error as Error)?.message);
    }
  }

  // Delete /comments/:id
  @Delete(':id')
  @UseGuards(CommentsGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID): void {
    try {
      this.commentsService.remove(id);
    } catch (error) {
      // When database is integrated, add the typeof error check
      throw new NotFoundException((error as Error)?.message);
    }
  }
}
