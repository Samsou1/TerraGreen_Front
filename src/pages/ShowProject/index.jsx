import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";

const ShowProject = () => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const fetchProject = async () => {
      await APIManager.getProject(id).then((data) => setProject(data));
    };
    fetchProject().catch(console.error);
  }, []);

  // if (!project.user) {
  //   return <h3>No apartment with such id</h3>;
  // }

  if (
    Cookies.get("currentUser") &&
    JSON.parse(Cookies.get("currentUser")).id === project.user_id
  ) {
    return (
      <div className="">
        <div className="">
          <h1>Title:{project.title}</h1>
          <p>Description: {project.description}</p>
          <p>Region ID: {project.region_id}</p>
          <p>Country ID: {project.country_id}</p>
          <p>Project status ID: {project.project_status_id}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <container className="current_user_access">    
            <button className="edit_btn">              
              <span><Link className="edit" to={`/editproject/${project.id}`}>Edit</Link></span>
            </button>   
            <button className="edit_btn">              
              <span><DeleteProjectButton/></span>
            </button>  
          </container>          
        </div>
      </div>
    );
  } else {
    return (
      <div className="apartmentCard show">
        <div className="product-details">
        <h1>Title:{project.title}</h1>
          <p>Description: {project.description}</p>
          <p>Region ID: {project.region_id}</p>
          <p>Country ID: {project.country_id}</p>
          <p>Project status ID: {project.project_status_id}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
        </div>

      </div>
    );
  }
};

export default ShowProject;
