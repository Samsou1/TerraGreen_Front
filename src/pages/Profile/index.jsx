import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";
import NotificationsContainer from "../../components/NotificationsContainer";

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
      try {
        await APIManager.deleteUser();
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
  };

    return user &&
      user.username &&
      user.username !== "Anonymous" ? (
      <div className="profileCard">
        <div className="profileHeader">
          <h2>Hello {user.username} !</h2>
        </div>
        <div className="profileContainer">
          <div className="profileInfos">
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Description: {user.description}</p>
            <p>Country id: {user.country_id}</p>
            <p>Region id: {user.region_id}</p>
            <p>Notification subscription: {user.notification_subscription}</p>
            <div className="profileBtns">
            <Link className="profileBtn" to="/editprofile">
              Edit profile
            </Link>
            <button onClick={handleClick}>Delete Profile</button>            
          </div>
          </div>              
          <div className="profileActivities">
            <NotificationsContainer/>            
          </div>
        </div>
      </div>
    ) : (
      <div className="profileCard">
        <div className="profileHeader">
          <h2>Hello !</h2>
        </div>
        <div className="profileContainer">
          <div className="profileInfos">
            <p>Email: {user.email}</p>
            <p>Description: {user.description}</p>
            <p>Country id: {user.country_id}</p>
            <p>Region id: {user.region_id}</p>
            <p>Notification subscription: {user.notification_subscription}</p> 
            <div className="profileBtns">
              <Link className="profileBtn" to="/editprofile">
                Edit profile
              </Link>
              <button onClick={handleClick}>Delete Profile</button>            
            </div>           
          </div>
          <div className="profileActivities">
            <NotificationsContainer/>            
          </div>
        </div>
      </div>
    );
};

export default Profile;
