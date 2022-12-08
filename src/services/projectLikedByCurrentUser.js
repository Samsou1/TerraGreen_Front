import { currentUserId, userLoggedIn } from "./user";

export const projectLikedByCurrentUser = (likes) => {
  return userLoggedIn() &&
    likes.filter((like) => like.user_id === currentUserId).length > 0
    ? true
    : false;
};
