import APIManager from "../../services/api";
import { userLoggedIn } from "../../services/user";
import { projectRegisteredByCurrentUser } from "../../services/projectRegisteredByCurrentUser";
import { useEffect, useState } from "react";

const ProjectRegistration = ({ projectRegistrations }) => {
  const [registered, setRegistered] = useState(false);
  const [numberOfProjectRegistrations, setNumberOfProjectRegistrations] = useState(0);
  const [id, setId] = useState("");

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    setRegistered(projectRegisteredByCurrentUser(projectRegistrations));
    setNumberOfProjectRegistrations(projectRegistrations.length)
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
    }
  };

  return (
    <button
      onClick={handleClick}
      className={registered ? "registered" : "unregistered"}
    >{registered ? `Unregister ${numberOfProjectRegistrations}` : `Register ${numberOfProjectRegistrations}`}</button>
  );
};

export default ProjectRegistration;
