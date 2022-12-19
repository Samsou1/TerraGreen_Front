import APIManager from "../../services/api";
import { userLoggedIn } from "../../services/user";
import { projectRegisteredByCurrentUser } from "../../services/projectRegisteredByCurrentUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectRegistration = ({ projectRegistrations }) => {
  const [registered, setRegistered] = useState(false);
  const [numberOfProjectRegistrations, setNumberOfProjectRegistrations] =
    useState(0);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    setRegistered(projectRegisteredByCurrentUser(projectRegistrations));
    setNumberOfProjectRegistrations(projectRegistrations.length);
  }, [projectRegistrations]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (userLoggedIn()) {
      const data = {
        project_registration: { project_id: id },
      };
      try {
        await APIManager.toggleProjectRegistration(data);
        registered
          ? setNumberOfProjectRegistrations(numberOfProjectRegistrations - 1)
          : setNumberOfProjectRegistrations(numberOfProjectRegistrations + 1);
        setRegistered(!registered);
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="registerBtn">
      <i className={registered ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
      <button
        onClick={handleClick}
        className={registered ? "registered" : "unregistered"}
      >
        {registered
          ? `Unregister | ${numberOfProjectRegistrations}`
          : `Register | ${numberOfProjectRegistrations}`}
      </button>
    </div>

  );
};

export default ProjectRegistration;
