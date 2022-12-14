import { convertTimeStampToDate } from "../../../services/convertTimeStamp";

const Comment = ({ comment }) => {
  return comment.user &&
    comment.user.username &&
    comment.user.username !== "" ? (
    <div className="commentCard">
      <p className="commentDatas">
        <span>{comment.user.username}</span> posted on{" "}
        {convertTimeStampToDate(comment.created_at)}
      </p>
      <p className="commentContent">{comment.content}</p>
    </div>
  ) : (
    <div className="commentCard">
      <p className="commentDatas">
        <span>Anonymous</span> posted on{" "}
        {convertTimeStampToDate(comment.created_at)}
      </p>
      <p className="commentContent">{comment.content}</p>
    </div>
  );
};

export default Comment;
