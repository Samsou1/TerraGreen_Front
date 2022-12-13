import React from "react";
import SearchBar from "../../components/SearchBar";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <div className="projectPage">      
        <h1 className="projectPageTitle">Projects city by city</h1>
        <SearchBar />
        <ProjectCards />
      </div>
    </>
  );
};

export default Projects;
