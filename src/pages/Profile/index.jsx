import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => setUser(data));
    };
    fetchProfile().catch(console.error);
  }, []);

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
    </div>
  );
};

export default Profile;
