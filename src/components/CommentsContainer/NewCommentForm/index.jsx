import { useState, useEffect } from "react";
import Errors from "../../Errors";
import { validateComment } from "../../../services/validateDataComment";
import APIManager from "../../../services/api";

const NewCommentForm = () => {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [id, setId] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validateComment(comment)) {
      setErrors([
        { message: "Your comment must be at least 5 characters long" },
      ]);
    } else {
      const data = {
        comment: {
          content: comment,
          project_id: id,
        },
      };
      try {
        await APIManager.newComment(data);
        setComment('')
      } catch (err) {
        setErrors([{ message: "Something went wrong" }]);
      }
    }
  };

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  return (
    <div>
      <Errors errors={errors}></Errors>
      <form onSubmit={handleSumbit} className="commentForm">
        <label htmlFor="commentLabel"><h3>New comment</h3></label>
        <input
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          type="text"
          className="commentInput"
          id="comment"
          placeholder="Comment"
        />
        <input type="submit" value="Post" className="commentBtn" />
      </form>
    </div>
  );
};

export default NewCommentForm;
