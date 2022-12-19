import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../services/user";
import NotificationsContainer from "../../components/NotificationsContainer";

const Profile = () => {
  const [user, setUser] = useState({});
  const [region, setRegion] = useState({});
  const [country, setCountry] = useState({});
  const [regionID, setRegionID] = useState(null);
  const [countryID, setCountryID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => {
        setUser(data);
        setCountryID(data.country_id);
        setRegionID(data.region_id);
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

  useEffect(() => {
    if (countryID) {
      const fetchProfile = async () => {
        await APIManager.getCountryWithID(countryID).then((data) => {
          setCountry(data);
        });
      };
      fetchProfile().catch(console.error);
    }
  }, [countryID]);

  useEffect(() => {
    if (regionID) {
      const fetchProfile = async () => {
        await APIManager.getRegionWithID(regionID).then((data) => {
          setRegion(data);
        });
      };
      fetchProfile().catch(console.error);
    }
  }, [regionID]);

  return user && user.username && user.username !== "Anonymous" ? (
    <div className="profileCard">
      <div className="profileHeader">
        <h2>Hello {user.username} !</h2>
      </div>
      <div className="profileContainer">
        <div className="profileInfos">
          <h3>Biography</h3>
          <p>{user.description}</p>
          <h3>Location</h3>
          <p>
            {region.name ? region.name : "Unknown"},{" "}
            {country.name ? country.name : "Unknown"}
          </p>
          <h3>Parameters</h3>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p className="notifications">
            <span>Do I want to receive notifications?</span>
            {user.notification_subscription ? " Yes" : " No"}
          </p>
          <div className="profileBtns">
            <Link className="profileBtn" to="/editprofile">
              Edit profile
            </Link>
            <div className="deleteBtn">
              <i className="fa-regular fa-trash-can"></i>
              <button onClick={handleClick}>Delete Profile</button>
            </div>
          </div>
        </div>
        <div className="profileActivities">
          <NotificationsContainer />
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
          <p>
            {region.name ? region.name : "Unknown"},{" "}
            {country.name ? country.name : "Unknown"}
          </p>
          <h3>Parameters</h3>
          <p>{user.email}</p>
          <p className="notifications">
            <span>Do I want to receive notifications?</span>
            {user.notification_subscription ? " Yes" : " No"}
          </p>
          <div className="profileBtns">
            <Link className="profileBtn" to="/editprofile">
              Edit profile
            </Link>
            <div className="deleteBtn">
              <i className="fa-regular fa-trash-can"></i>
              <button onClick={handleClick}>Delete Profile</button>
            </div>
          </div>
        </div>
        <div className="profileActivities">
          <NotificationsContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
