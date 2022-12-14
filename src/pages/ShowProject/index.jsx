import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { useNavigate } from "react-router-dom";
import CommentsContainer from "../../components/CommentsContainer";
import Like from "../../components/Like";
import Mapping from "../../components/Map/Mapping";


import { userLoggedIn, currentUserId } from "../../services/user";
import ProjectRegistration from "../../components/ProjectRegistration";

const ShowProject = () => {
  const [project, setProject] = useState({});
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [projectRegistrations, setProjectRegistrations] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const setAll = (data) => {
    setCountry(data.country);
    setRegion(data.region);
    setStatus(data.status);
    setProject(data.project);
    setLikes(data.likes);
    setComments(data.comments);
    setProjectRegistrations(data.project_registrations)
    setImage(data.image_url)
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const fetchProject = async () => {
      await APIManager.getProject(id).then((data) => {
        setAll(data);
      });
    };
    fetchProject().catch(console.error);
  }, []);

  if (userLoggedIn() && currentUserId() === project.user_id) {
    return (
      <div className="showContainer">
      <div className="projectWrapper">
        <div className="projectImg">
          <img src={image} alt="project illustration" />
        </div>
        <div className="projectInfos">
          <div className="projectDescription">
            <h1>{project.title}</h1>
            <h2>Username</h2>
            <p>{project.content}</p>
            <div className="projectLocation">
              <h3>Location</h3>
              <p>{project.address}</p>
              <p>{project.city} {project.postal_code}</p>
              <p>{region}, {country}</p>                
            </div>
            <div className="projectStatus">
              <h3>Status</h3>
              <p>{project.status}</p>
            </div>
          </div>
          <div className="projectBtnShow">
            <Like likes={likes} />
            <Link className="editBtn" to={`/editproject/${project.id}`}>Edit</Link>
            <DeleteProjectButton className="editBtn" />
          </div>
        </div>
      </div>
      <div className="projectAdditionnalBlocks">
        <button onClick={() => navigate(-1)} >Go back</button>
        <CommentsContainer comments={comments} />
        <Mapping project={project}/>
      </div>
    </div>
    );
  } else {
    return (
      <div className="showContainer">
        <div className="projectWrapper">
          <div className="projectImg">
            <img src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="project illustration" />
          </div>
          <div className="projectInfos">
            <div className="projectDescription">
              <h1>{project.title}</h1>
              <h2>Username</h2>
              <p>{project.content}</p>
              <div className="projectLocation">
                <h3>Location</h3>
                <p>{project.address}</p>
                <p>{project.city} {project.postal_code}</p>
                <p>{region}, {country}</p>                
              </div>
              <div className="projectStatus">
                <h3>Status</h3>
                <p>{project.status}</p>
              </div>
            </div>
            <div className="projectBtnShow">
              <Like likes={likes} />
              <ProjectRegistration projectRegistrations={projectRegistrations}/>
            </div>
          </div>
        </div>
        <div className="projectAdditionnalBlocks">
          <button onClick={() => navigate(-1)} >Go back</button>
          <CommentsContainer comments={comments} />
          <Mapping project={project}/>
        </div>
      </div>
    );
  }
};

export default ShowProject;
