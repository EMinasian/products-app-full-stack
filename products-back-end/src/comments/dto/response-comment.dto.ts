export class CommentResponseDto {
  commentId: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  subComments?: CommentResponseDto[];
}
