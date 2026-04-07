import Comment from "../Comment/Comment";
import { CommentType } from "@/types/comments";

const CommentsSection = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-gray-800">Comments Section</h1>
      <div className="flex flex-col gap-4">
        {comments.map(
          ({ title, content, commentId, updatedAt, subComments }) => (
            <Comment
              key={commentId}
              title={title}
              content={content}
              updatedAt={updatedAt}
              subComments={subComments}
              customClasses="p-4 shadow-2xl"
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
