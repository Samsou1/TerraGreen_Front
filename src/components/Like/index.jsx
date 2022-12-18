import APIManager from "../../services/api";
import { userLoggedIn } from "../../services/user";
import { projectLikedByCurrentUser } from "../../services/projectLikedByCurrentUser";
import { useEffect, useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Like = ({ likes }) => {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    setLiked(projectLikedByCurrentUser(likes));
    setNumberOfLikes(likes.length);
  }, [likes]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (userLoggedIn()) {
      const data = {
        like: { project_id: id },
      };
      try {
        await APIManager.toggleLike(data);
        liked
          ? setNumberOfLikes(numberOfLikes - 1)
          : setNumberOfLikes(numberOfLikes + 1);
        setLiked(!liked);
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <button onClick={handleClick} className="projectShowBtn">
      <i class={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
      {numberOfLikes}
    </button>
  );
};

export default Like;
