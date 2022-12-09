import { Link } from "react-router-dom";
import { getCountryFromId } from "../../../services/turnIdToString";
import { getRegionFromId } from "../../../services/turnIdToString";
import { getProjectStatusFromId } from "../../../services/turnIdToString";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="product-details">
        <h3>{project.attributes.title}</h3>
        <li>{project.attributes.content}</li>
        <li>
          <strong>Status: </strong>
          {getProjectStatusFromId(project.attributes.project_status_id).name}
        </li>
        <li>
          <strong>Address: </strong>
          {project.attributes.address}
        </li>
        <li>
          <strong>ZIP: </strong>
          {project.attributes.postal_code}{" "}
        </li>
        <li>
          <strong>City: </strong>
          {project.attributes.city}
        </li>
        <li>
          <strong>Postal code: </strong>
          {project.attributes.postal_code}
        </li>
        <li>
          <strong>Region: </strong>
          {getRegionFromId(project.attributes.region_id).name}
        </li>
        <li>
          <strong>Country: </strong>
          {getCountryFromId(project.attributes.country_id).name}
        </li>
        <li>
          <strong>GPS: </strong>
          {project.attributes.GPS}
        </li>
      </div>
      <div className="control">
        <button className="btn">
          <span className="look">
            <Link className="link" to={`/projects/${project.id}`}>
              Have a look
            </Link>
          </span>
        </button>
      </div>
      <img src={project.attributes.image_url} />
      {console.log(project)}
    </div>
  );
};

export default ProjectCard;
