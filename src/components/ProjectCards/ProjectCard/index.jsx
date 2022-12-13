import { Link } from "react-router-dom";
import { getCountryFromId } from "../../../services/selectRegionCountryAndStatusData";
import { getRegionFromId } from "../../../services/selectRegionCountryAndStatusData";
import { getProjectStatusFromId } from "../../../services/selectRegionCountryAndStatusData";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      {/* <img src={project.image_url} /> */}
      <img src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="cardImg" alt="project illustration" />
      <div className="cardOverlay">
        <div className="cardHeader">                     
          <img className="cardThumb" src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
          <div className="cardHeaderText">
            <h3 className="cardTitle">{project.title}</h3>           
            <p className="cardTagline">Username</p>
          </div>
        </div>
        <div className="cardText">
          <p className="cardLocation">{project.city} {project.postal_code} <br /> {getRegionFromId(project.region_id).name}, {getCountryFromId(project.country_id).name}</p> 
          <p className="cardDescription">{project.content}</p>
        </div>
        <button className="projectBtn">
            <Link to={`/projects/${project.id}`}>
              Have a look
            </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
