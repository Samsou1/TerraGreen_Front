import ProjectCards from "../../components/ProjectCards";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <>
      <h1 className="myprojecttitle">My projects</h1>
      <Link to="/newproject" className="newProjectBtn">
            New Project
          </Link>
      <ProjectCards />
    </>
  );
};

export default MyProjects;
