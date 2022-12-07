import { Link } from "react-router-dom";
import { getCountryFromId } from "../../../services/turnIdToString";
import { getRegionFromId } from "../../../services/turnIdToString";
import { getProjectStatusFromId } from "../../../services/turnIdToString";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="product-details">
        <h3>{project.title}</h3>
        <li>{project.content}</li>
        <li>
          <strong>Status: </strong>
          {getProjectStatusFromId(project.project_status_id).name}
        </li>
        <li>
          <strong>Address: </strong>
          {project.address}
        </li>
        <li>
          <strong>ZIP: </strong>
          {project.postal_code}{" "}
        </li>
        <li>
          <strong>City: </strong>
          {project.city}
        </li>
        <li>
          <strong>Postal code: </strong>
          {project.postal_code}
        </li>
        <li>
          <strong>Region ID: </strong>
          {getRegionFromId(project.region_id).name}
        </li>
        <li>
          <strong>Country ID: </strong>
          {getCountryFromId(project.country_id).name}
        </li>
        <li>
          <strong>GPS: </strong>
          {project.GPS}
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
    </div>
  );
};

export default ProjectCard;
