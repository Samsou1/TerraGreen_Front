import React from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <div className="projectsPage">      
      <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
     alt="logo" className="img1"></img>
        <div className="project-hero">
          <h1>Projects</h1>
        </div>
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
