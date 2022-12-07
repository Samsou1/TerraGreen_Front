import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await APIManager.logoutUser();
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
