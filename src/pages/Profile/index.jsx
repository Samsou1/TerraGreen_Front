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

  return (
    <div className="profileCard">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Description: {user.description}</p>
      <p>
        Country:
        {country.name ? country.name : "Unknown"}
      </p>
      <p>
        Region:
        {region.name ? region.name : "Unknown"}
      </p>
      <p>
        Do I want to receive notifications:
        {user.notification_subscription ? " Yes" : " No"}
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
