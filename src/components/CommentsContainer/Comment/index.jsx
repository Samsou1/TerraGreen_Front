import { convertTimeStampToDate } from "../../../services/convertTimeStamp";

const Comment = ({ comment }) => {
  console.log(comment);
  return comment.user &&
    comment.user.username &&
    comment.user.username !== "" ? (
    <div className="comment">
      <p>
        {comment.user.username} posted on
        {convertTimeStampToDate(comment.created_at)}:
      </p>
      <p>{comment.content}</p>
    </div>
  ) : (
    <div className="comment">
      <p>Anonymous posted on {convertTimeStampToDate(comment.created_at)}:</p>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
