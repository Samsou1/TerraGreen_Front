import React from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <div className="projectPage">      
        <h1 className="projectPageTitle">Projects city by city</h1>
        <SearchBar />
        <Link to="/newproject" className="newProjectBtn">New Project</Link>
        <ProjectCards />
      </div>
    </>
  );
};

export default Projects;
