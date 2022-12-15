import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import Errors from "../Errors";

const DeleteProjectButton = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);

  const handleClick = () => {
    setErrors([]);
    try {
      APIManager.deleteProject(id);
      navigate("/myprojects");
    } catch {
      setErrors([{ message: "Something went wrong" }]);
    }
  };

  return (
    <div>
      <Errors errors={errors} />
      <button onClick={handleClick} className="delete_btn">
        Delete
      </button>
    </div>
  );
};

export default DeleteProjectButton;
