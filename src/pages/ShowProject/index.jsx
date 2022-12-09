import Cookies from "js-cookie";
import { useState,  useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { useNavigate } from "react-router-dom";
import CommentsContainer from "../../components/CommentsContainer";
import Like from "../../components/Like";



const ShowProject = () => {
  const [project, setProject] = useState({});
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();




  const setAll = (data) => {
    setCountry(data.country);
    setRegion(data.region);
    setStatus(data.status);
    setProject(data.project);
    setLikes(data.likes);
    setComments(data.comments);
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

  if (
    Cookies.get("currentUser") &&
    JSON.parse(Cookies.get("currentUser")).id === project.user_id
  ) {
    return (
      <div className="">
        <div className="">
          <h1>Title:{project.title}</h1>
          <p>Content: {project.content}</p>
          <p>Region: {region}</p>
          <p>Country: {country}</p>
          <p>Project status: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <Like likes={likes} />
          <CommentsContainer comments={comments} />
          <span className="current_user_access">
            <button className="edit_btn">
              <span>
                <Link className="edit" to={`/editproject/${project.id}`}>
                  Edit
                </Link>
              </span>
            </button>
            <DeleteProjectButton className="edit_btn" />
          </span>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="">
          <h1>Title:{project.title}</h1>
          <p>Content: {project.content}</p>
          <p>Region: {region}</p>
          <p>Country: {country}</p>
          <p>Project status: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <Like likes={likes} />
          <CommentsContainer comments={comments} />
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }
};

export default ShowProject;
