import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { useNavigate } from "react-router-dom";
import CommentsContainer from "../../components/CommentsContainer";
import Like from "../../components/Like";
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
  const navigate = useNavigate();

  const setAll = (data) => {
    setCountry(data.country);
    setRegion(data.region);
    setStatus(data.status);
    setProject(data.project);
    setLikes(data.likes);
    setComments(data.comments);
    setProjectRegistrations(data.project_registrations)
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
            <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
          </div>
          <div className="projectInfos">
            <div className="projectDescription">
              <h1>{project.title}</h1>
              <h2>Username</h2>
              <p>{project.content}</p>
              <h3>Location</h3>
              <p>{project.address}</p>
              <p>{project.city} {project.postal_code}</p>
              <p>{region}, {country}</p>
            </div>
            <div className="projectBtnShow">
              <Like likes={likes} />
              <Link className="edit" to={`/editproject/${project.id}`}>Edit</Link>
              <DeleteProjectButton className="edit_btn" />
            </div>
          </div>
        </div>
        <button onClick={() => navigate(-1)} >Go back</button>
        <CommentsContainer comments={comments} />
    </div>
    );
  } else {
    return (
      <div className="showContainer">
        <div className="projectWrapper">
          <div className="projectImg">
            <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
          </div>
          <div className="projectInfos">
            <div className="projectDescription">
              <h1>{project.title}</h1>
              <h2>Username</h2>
              <p>{project.content}</p>
              <h3>Location</h3>
              <p>{project.address}</p>
              <p>{project.city} {project.postal_code}</p>
              <p>{region}, {country}</p>
            </div>
            <div className="projectBtnShow">
              <Like likes={likes} />
              <ProjectRegistration projectRegistrations={projectRegistrations}/>
            </div>
          </div>
        </div>
        <button onClick={() => navigate(-1)} >Go back</button>
        <CommentsContainer comments={comments} />
      </div>
    );
  }
};

export default ShowProject;
