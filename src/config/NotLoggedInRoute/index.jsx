import { Outlet, Navigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";

const NotLoggedInRoute = () => {
  return userLoggedIn() ? <Navigate to="/" /> : <Outlet />;
};

export default NotLoggedInRoute;
