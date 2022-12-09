import React from "react";
import NewCommentForm from "./NewCommentForm";
import Comment from "./Comment";
import { userLoggedIn } from "../../services/user";

const CommentsContainer = ({ comments }) => {
  if (userLoggedIn()) {
    return (
      <div className="commentsContainer">
        <h3>Comments</h3>
        {comments.map((comment, index) => {
          return <Comment key={"comment" + index} comment={comment} />;
        })}
        <NewCommentForm />
      </div>
    );
  } else {
    return (
      <div className="commentsContainer">
        <h3>Comments</h3>
        {comments.map((comment, index) => {
          return <Comment key={"comment" + index} comment={comment} />;
        })}
        <NewCommentForm />
      </div>
    );
  }
};

export default CommentsContainer;
