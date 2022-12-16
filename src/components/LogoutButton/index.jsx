import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { userLoggedInAtom } from "../../store/user";

const LogoutButton = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userLoggedInAtom);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await APIManager.logoutUser();
      window.location.reload(false)
      setUser(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <button onClick={handleClick} className="logoutBtn">
      Log out
    </button>
  );
};

export default LogoutButton;
