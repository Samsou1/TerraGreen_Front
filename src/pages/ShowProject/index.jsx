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
  const [username, setUsername] = useState("")
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
    setUsername(data.user.username)
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
            <h2>{username? username: "Anonymous"}</h2>
            <p>{project.content}</p>
            <div className="projectLocation">
              <h3>Location</h3>
              <p>{project.address}</p>
              <p>{project.city} {project.postal_code}</p>
              <p>{region}, {country}</p>                
            </div>
            <div className="projectStatus">
              <h3>Status</h3>
              <div className="progressBar">
                <div className="progress-bar" id={status}></div>
              </div>
            </div>
          </div>
          <div className="projectShowBtnContainer">
            <Like likes={likes} />
            <Link className="projectShowBtn" to={`/editproject/${project.id}`}>Edit</Link>
            <DeleteProjectButton />
          </div>
        </div>
      </div>
      <div className="projectAdditionnalBlocks">
        <div className="backBtn">
          <i class="fa-solid fa-arrow-left"></i>
          <button onClick={() => navigate(-1)} >Go back</button>
        </div>
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
          <img src={image} alt="project illustration" />
          </div>
          <div className="projectInfos">
            <div className="projectDescription">
              <h1>{project.title}</h1>
              <h2>{username? username: "Anonymous"}</h2>
              <p>{project.content}</p>
              <div className="projectLocation">
                <h3>Location</h3>
                <p>{project.address}</p>
                <p>
                  {project.city} {project.postal_code}
                </p>
                <p>
                  {region}, {country}
                </p>
              </div>
              <div className="projectStatus">
                <h3>Status</h3>
                <div className="progressBar">
                  <div className="progress-bar" id={status}></div>
                </div>
              </div>
            </div>
            <div className="projectShowBtnContainer">
              <Like likes={likes} />
              <ProjectRegistration
                projectRegistrations={projectRegistrations}
              />
            </div>
          </div>
        </div>
        <div className="projectAdditionnalBlocks">
          <div className="backBtn">
            <i class="fa-solid fa-arrow-left"></i>
            <button onClick={() => navigate(-1)} >Go back</button>
          </div>
          <CommentsContainer comments={comments} />
          <Mapping project={project} />
        </div>
      </div>
    );
  }
};

export default ShowProject;
