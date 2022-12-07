import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";

const DeleteProjectButton = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  const handleClick = () => {
    APIManager.deleteProject(id);
    navigate("/myprojects");
  };

  return (
    <button onClick={handleClick} className="delete_btn">
      Delete
    </button>
  );
};

export default DeleteProjectButton;
