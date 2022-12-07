import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { useNavigate } from "react-router-dom";

const ShowProject = () => {
  const [project, setProject] = useState({});
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const setAll = (data) => {
    setCountry(data.country);
    setRegion(data.region);
    setStatus(data.status);
    setProject(data.project);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const fetchProject = async () => {
      await APIManager.getProject(id).then((data) => setAll(data));
    };
    fetchProject().catch(console.error);
  }, []);

  if (
    Cookies.get("currentUser") &&
    JSON.parse(Cookies.get("currentUser")).id === project.user_id
  ) {
    return (
      <div className="">
        <div className="">
          <h1>Title:{project.title}</h1>
          <p>Content: {project.content}</p>
          <p>Region ID: {region}</p>
          <p>Country ID: {country}</p>
          <p>Project status ID: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <span className="current_user_access">
            <button className="edit_btn">
              <span>
                <Link className="edit" to={`/editproject/${project.id}`}>
                  Edit
                </Link>
              </span>
            </button>
            <DeleteProjectButton className="edit_btn" />
          </span>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  } else {
    return (
      <div className="apartmentCard show">
        <div className="product-details">
          <h1>Title:{project.title}</h1>
          <p>Content: {project.content}</p>
          <p>Region ID: {region}</p>
          <p>Country ID: {country}</p>
          <p>Project status ID: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }
};

export default ShowProject;
