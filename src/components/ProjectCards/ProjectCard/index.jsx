import { Link } from "react-router-dom";
import { getCountryFromId } from "../../../services/turnIdToString";
import { getRegionFromId } from "../../../services/turnIdToString";
import { getProjectStatusFromId } from "../../../services/turnIdToString";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      {/* <img src={project.attributes.image_url} /> */}
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{project.attributes.title}</h3>
            <span class="card__tagline">{project.attributes.city} {project.attributes.postal_code}</span>
            <span class="card__tagline">{getRegionFromId(project.attributes.region_id).name}, {getCountryFromId(project.attributes.country_id).name}</span>            
            <span class="card__status">Username</span>
          </div>
        </div>
        <p class="card__description">{project.attributes.content}</p>
        <button className="projectBtn">
            <Link to={`/projects/${project.id}`}>
              Have a look
            </Link>
        </button>
      </div>
      {console.log(project)}
    </div>
  );
};

export default ProjectCard;
