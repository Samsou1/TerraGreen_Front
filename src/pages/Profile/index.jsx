import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";
import NotificationsContainer from "../../components/NotificationsContainer";
import { getCountryFromId } from "../../services/selectRegionCountryAndStatusData";
import { getRegionFromId } from "../../services/selectRegionCountryAndStatusData";

const Profile = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => {
        setUser(data);
      });
    };
    fetchProfile().catch(console.error);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      userLoggedIn() &&
      window.confirm("Do you really want to delete your profile?")
    ) {
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
      <p>
        Country:
        {user.country_id
          ? getCountryFromId(user.country_id)
            ? getCountryFromId(user.country_id)
            : "Unknown"
          : "Unknown"}
      </p>
      <p>
        Region:
        {user.region_id
          ? getRegionFromId(user.region_id)
            ? getRegionFromId(user.region_id)
            : "Unknown"
          : "Unknown"}
      </p>
      <p>
        Do I want to receive notifications?{" "}
        {user.notification_subscription ? "Yes" : "No"}
      </p>
      <NotificationsContainer />
      <Link className="btn_profile" to="/editprofile">
        Edit profile
      </Link>
      <button onClick={handleClick}>Delete Profile</button>
    </div>
  );
};

export default Profile;
