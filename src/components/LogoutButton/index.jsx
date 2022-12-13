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
      setUser(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <button onClick={handleClick} className="logout-button">
      Log out
    </button>
  );
};

export default LogoutButton;
