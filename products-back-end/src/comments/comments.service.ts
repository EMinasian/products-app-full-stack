import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import getMockComments from '../../mocks/comments';
import { CommentResponseDto } from './dto/response-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  private comments: CommentResponseDto[] = getMockComments(); // TODO: replace with ORM logic

  findAll(cursor: string): { items: CommentResponseDto[]; endCursor: string } {
    return {
      items: this.comments,
      endCursor: cursor, // TODO: change it to end-cursor once pagination available
    };
  }

  findOne(id: string): CommentResponseDto | undefined {
    const comment = this.comments.find((comment) => comment.commentId === id);
    if (!comment) {
      throw new Error(`Comment with id ${id} does not exist.`);
    }

    return comment;
  }

  create(createCommentDto: CreateCommentDto): CommentResponseDto {
    const currentDate = new Date();
    const newComment: CommentResponseDto = {
      ...createCommentDto,
      commentId: randomUUID(),
      createdAt: currentDate.toISOString(),
      updatedAt: currentDate.toISOString(),
      subComments: [],
    };
    this.comments.push(newComment);
    return newComment;
  }

  update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): CommentResponseDto | undefined {
    const index = this.comments.findIndex(
      (comment) => comment.commentId === id,
    );

    if (index === -1) {
      throw new Error(`Comment with id ${id} does not exist.`);
    }

    const currentDate = new Date();
    const updatedComment = {
      ...this.comments[index],
      ...updateCommentDto,
      updatedAt: currentDate.toISOString(),
    };
    this.comments[index] = updatedComment;
    return updatedComment;
  }

  remove(id: string): void {
    const index = this.comments.findIndex(
      (comment) => comment.commentId === id,
    );

    if (index === -1) {
      throw new Error(`Comment with id ${id} does not exist.`);
    }

    this.comments.splice(index, 1);
  }
}
