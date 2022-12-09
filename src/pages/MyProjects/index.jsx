import ProjectCards from "../../components/ProjectCards";
import { Link } from "react-router-dom";
const MyProjects = () => {
  return (
    <>
      <h1>My projects</h1>
      <Link to="/newproject">New Project</Link>
      <ProjectCards />
    </>
  );
};

export default MyProjects;
