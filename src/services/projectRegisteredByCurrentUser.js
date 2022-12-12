import { currentUserId, userLoggedIn } from "./user";

export const projectRegisteredByCurrentUser = (registrations) => {
  return userLoggedIn() &&
  registrations.filter((registration) => registration.user_id === currentUserId()).length > 0
    ? true
    : false;
};
