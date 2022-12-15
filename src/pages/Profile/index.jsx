import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";
import NotificationsContainer from "../../components/NotificationsContainer";

const Profile = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [notification_subscription,setNotification] = useState(false);

  const checkHandler = (data) => {
    setIsChecked(!isChecked);
    data.notification_subscription ? setNotification(true) : setNotification(false);
  };

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
            <h3>Biography</h3>
            <p>{user.description}</p>
            <h3>Location</h3>
            <p>{user.region_id}, {user.country_id}</p>
            <h3>Parameters</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <div>
              <label htmlFor="checkbox">I want notifications </label>
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={checkHandler}
                value={user.notification_subscription}
              />
            </div>
            {/* {console.log(user.notification_subscription)} */}
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
            <h3>Biography</h3>
            <p>{user.description}</p>
            <h3>Location</h3>
            <p>{user.region_id}, {user.country_id}</p>
            <h3>Parameters</h3>
            <p>{user.email}</p>
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
