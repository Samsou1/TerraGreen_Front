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
      <h3>Post a new comment</h3>
      <Errors errors={errors}></Errors>
      <form onSubmit={handleSumbit}>
        <div className="input-container">
          <label htmlFor="comment">Comment </label>
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            id="comment"
            placeholder="Comment"
          />
        </div>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default NewCommentForm;
