import Cookies from "js-cookie";

export const currentUser = () => {
  return Cookies.get("currentUser") ? true : false;
};

export const currentUserId = () => {
  return currentUser() ? JSON.parse(Cookies.get("currentUser")).id : null;
};
