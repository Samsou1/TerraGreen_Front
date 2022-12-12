import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";

const Profile = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => setUser(data));
    };
    fetchProfile().catch(console.error);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      userLoggedIn() &&
      window.confirm("Do you really want to delete your profile?")
    ) {
      // const data = {
      //   like: { project_id: id },
      // };
      try {
        await APIManager.deleteUser();
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="profileCard">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Description: {user.description}</p>
      <p>Country id: {user.country_id}</p>
      <p>Region id: {user.region_id}</p>
      <p>Notification subscription: {user.notification_subscription}</p>
      <Link className="btn_profile" to="/editprofile">
        Edit profile
      </Link>
      <button onClick={handleClick}>Delete Profile</button>
    </div>
  );
};

export default Profile;
