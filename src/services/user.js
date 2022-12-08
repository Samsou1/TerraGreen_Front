import Cookies from "js-cookie";

export const userLoggedIn = () => {
  return Cookies.get("currentUser") ? true : false;
};

export const currentUserId = () => {
  return userLoggedIn() ? JSON.parse(Cookies.get("currentUser")).id : null;
};
