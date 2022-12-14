import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import ProjectCard from "./ProjectCard";
import { searchAtom } from "../../store/search";
import { useAtom } from "jotai";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useAtom(searchAtom);

  useEffect(() => {
    if (window.location.search) {
      setSearch(window.location.search.split("?search=")[1]);
    } else if (window.location.pathname === "/myprojects") {
      setSearch(null);
    } else {
      setSearch(null);
    }
  }, []);

  useEffect(() => {
    if (search) {
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
  }, [search]);

  return (
    <section className="projects-cards-container">
      <h2>{search ? `Results for '${search}'` : `All the projects`}</h2>
      <div className="projectsCards">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={"project" + project.id}
              project={project.attributes}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCards;
