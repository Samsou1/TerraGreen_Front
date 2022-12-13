import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (window.location.search) {
      const search = window.location.search.split("?search=")[1];
      const fetchData = async () => {
        await APIManager.getFilteredProjects(search).then((data) =>
          setProjects(data)
        );
      };
      fetchData().catch(console.error);
    } else if (window.location.pathname === "/myprojects") {
      const fetchData = async () => {
        await APIManager.getMyProjects().then((data) => setProjects(data));
      };
      fetchData().catch(console.error);
    } else {
      const fetchData = async () => {
        await APIManager.getAllProjects().then((data) => setProjects(data));
      };
      fetchData().catch(console.error);
    }
  }, []);

  return (
    <section className="projects-cards-container">
      <div className="projectsCards">
        {projects.map((project) => {  
          return (
            <ProjectCard key={'project' + project.id } project={project.attributes} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCards;
