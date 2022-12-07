import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { useNavigate } from "react-router-dom";

const ShowProject = () => {
  const [project, setProject] = useState({});
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const setAll = (data) => {
    setCountry(data.country);
    setRegion(data.region);
    setStatus(data.status);
    setProject(data.project);
    setLikes(data.likes.length);
    setComments(data.comments);
    if (Cookies.get("currentUser"))
      [
        data.likes.filter(
          (like) => like.user_id == JSON.parse(Cookies.get("currentUser")).id
        ).length === 0
          ? setLiked(false)
          : setLiked(true),
      ];
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
          <p>Region ID: {region}</p>
          <p>Country ID: {country}</p>
          <p>Project status ID: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <p>Likes: {likes}</p>
          <ul>
            Comments:
            {comments.map((comment) => {
              return (
                <li key={comment.id + comment.user_id}>
                  <h3>{comment.user.username}</h3>
                  <p>{comment.content}</p>
                </li>
              );
            })}
          </ul>
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
      <div className="apartmentCard show">
        <div className="product-details">
          <h1>Title:{project.title}</h1>
          <p>Content: {project.content}</p>
          <p>Region ID: {region}</p>
          <p>Country ID: {country}</p>
          <p>Project status ID: {status}</p>
          <p>Address: {project.address}</p>
          <p>City: {project.city}</p>
          <p>Postal code: {project.postal_code}</p>
          <p>GPS: {project.GPS}</p>
          <p>Likes: {likes}</p>
          <ul>
            Comments:
            {comments.map((comment) => {
              return (
                <li key={comment.id + comment.user_id}>
                  <h3>{comment.user.username}</h3>
                  <p>{comment.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }
};

export default ShowProject;
