import { Link } from "react-router-dom";
import { getCountryFromId } from "../../../services/selectRegionCountryAndStatusData";
import { getRegionFromId } from "../../../services/selectRegionCountryAndStatusData";
import { getProjectStatusFromId } from "../../../services/selectRegionCountryAndStatusData";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      {/* <img src={project.image_url} /> */}
      <img src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card__image" alt="project illustration" />
      <div className="card__overlay">
        <div className="card__header">                     
          <img className="card__thumb" src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
          <div className="card__header-text">
            <h3 className="card__title">{project.title}</h3>           
            <span className="card__status">Username</span>
          </div>
        </div>
        <span className="card__tagline">{project.city} {project.postal_code}</span>
        <span className="card__tagline">{getRegionFromId(project.region_id).name}, {getCountryFromId(project.country_id).name}</span> 
        <p className="card__description">{project.content}</p>
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
