import React from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <div className="projectsPage">
        <h1 className="projectsTitle">Projects</h1>
        <div className="projectsHeader">
          <SearchBar />
          <Link to="/newproject" className="newProjectBtn">
            New Project
          </Link>
        </div>
        <ProjectCards />
      </div>
    </>
  );
};

export default Projects;
