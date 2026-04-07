import { CommentType } from "@/types/comments";
import getParsedDate from "@/utils/getParsedDate";

const Comment = ({
  title,
  content,
  updatedAt,
  subComments,
  customClasses,
}: CommentType & { customClasses?: string }) => {
  return (
    <div
      className={`flex flex-col gap-2 text-gray-700 bg-white rounded-2xl ${customClasses ? customClasses : ""}`}
    >
      <div className="flex justify-between items-baseline">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm font-normal">{getParsedDate(updatedAt)}</p>
      </div>
      <p className="text-base font-normal">{content}</p>
      <hr className="h-px bg-gray-400 border-0 my-2" />
      {subComments && (
        <div className="flex flex-col gap-2 pl-8 py-4">
          {subComments.map(
            ({ title, content, commentId, updatedAt, subComments }) => (
              <Comment
                key={commentId}
                title={title}
                content={content}
                updatedAt={updatedAt}
                subComments={subComments}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
