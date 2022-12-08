import APIManager from "../../services/api";
import { userLoggedIn } from "../../services/user";
import { projectLikedByCurrentUser } from "../../services/projectLikedByCurrentUser";
import { useEffect, useState } from "react";

const Like = ({ likes }) => {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [id, setId] = useState("");

  useEffect(() => {
    setLiked(likes.length);
    setId(window.location.pathname.split("/")[2]);
  }, []);

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
    }
  };

  return userLoggedIn() && projectLikedByCurrentUser(likes) ? (
    <button onClick={handleClick}>{numberOfLikes} You can like</button>
  ) : (
    <button onClick={handleClick}>{numberOfLikes} You cannot like</button>
  );
};

export default Like;
