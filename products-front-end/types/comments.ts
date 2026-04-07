export type CommentType = {
  title: string;
  content: string;
  commentId?: string;
  updatedAt: string;
  subComments?: CommentType[];
};
