import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../components/Errors";
import { useAtomValue } from "jotai/utils";
import { countriesAtom } from "../../store/country";
import {
  getCountryFromName,
  getRegionFromName,
} from "../../services/selectRegionCountryAndStatusData";

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);
  const [notifications, setNotifications] = useState(false);
  const navigate = useNavigate();

  const [regionOptions, setRegionOptions] = useState([]);
  const [region, setRegion] = useState("");
  const countryOptions = useAtomValue(countriesAtom);
  const [country, setCountry] = useState(78);

  const setAll = (data) => {
    data.email ? setEmail(data.email) : setEmail("");
    data.username ? setUsername(data.username) : setLastName("");
    data.notification_subscription
      ? setNotifications(data.notification_subscription)
      : setNotifications(false);
    data.region_id ? setRegion(data.region_id) : setRegion("");
    data.country_id ? setCountry(data.country_id) : setCountry("");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => setAll(data));
    };
    fetchProfile()
      .then(regionOptions[0] ? setRegion(regionOptions[0].name) : setRegion(""))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const fetchRegions = async () => {
      await APIManager.getRegionsFromCountryID(country).then((data) =>
        setRegionOptions(data)
      );
    };
    fetchRegions().catch(console.error);
  }, [country]);

  const handleSubmit = async (e) => {
    setErrors([]);
    e.preventDefault();
    if (password === confirmPassword) {
      const data = {
        user: {
          username: username,
          email: email,
          notification_subscription: notifications,
          country_id: country,
          region_id: region,
        },
      };
      if (password !== "") {
        data.user.password = password;
      }
      try {
        await APIManager.editProfile(data);
        navigate("/profile");
      } catch (err) {
        setErrors([{ message: "Something went wrong" }]);
        console.error(err);
      }
    } else {
      setErrors([
        { message: "Password and confirmation password are different" },
      ]);
      throw new Error(
        "The password and the confirmation password are different"
      );
    }
  };

  useEffect(() => {
    const fetchRegions = async () => {
      await APIManager.getRegionsFromCountryID(country).then((data) =>
        setRegionOptions(data)
      );
    };
    fetchRegions().catch(console.error);
  }, [country]);

  return (
    <>
      <h1 className="register-title">Edit Profile</h1>
      <Errors errors={errors} />
      <Errors errors={errors} />
      <form onSubmit={handleSubmit} className="register-form-container">
        <div className="input-container">
          <label htmlFor="email">Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            placeholder="Password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="notifications">Notifications</label>
          <select
            onChange={(e) =>
              setNotifications(e.target.value === "Yes" ? true : false)
            }
            value={notifications ? "Yes" : "No"}
            id="notifications"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="country">Country</label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            type="text"
            id="country"
            placeholder="Country"
          >
            {countryOptions.map((countryOption) => {
              return (
                <option
                  key={countryOption.id + countryOption.name}
                  value={countryOption.id}
                >
                  {countryOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="region">Region</label>
          <select
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            type="text"
            id="region"
            placeholder="Region"
          >
            {regionOptions.map((regionOption) => {
              return (
                <option
                  key={regionOption.id + regionOption.name}
                  value={regionOption.id}
                >
                  {regionOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" value="Edit profile" />
      </form>
    </>
  );
};

export default EditProfile;
