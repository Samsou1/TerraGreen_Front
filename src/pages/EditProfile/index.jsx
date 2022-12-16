import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../components/Errors";
import {
  validatePassword,
  validateEmail,
} from "../../services/validateUserData";
import { validateInput } from "../../services/validateInput";

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [notification, setNotification] = useState("");
  const [errors, setErrors] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [country, setCountry] = useState();

  const [regionOptions, setRegionOptions] = useState([]);
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const setAll = (data) => {
    data.email ? setEmail(data.email) : setEmail("");
    data.username ? setUsername(data.username) : setLastName("");
    data.description ? setDescription(data.description) : setDescription("");
    data.region_id ? setRegion(data.region_id) : setRegion("");
    data.country_id ? setCountry(data.country_id) : setCountry("");
    data.notification_subscription
      ? setNotification(data.notification_subscription)
      : setNotification("");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => setAll(data));
    };
    const fetchCountries = async () => {
      await APIManager.getCountries().then((data) => setCountryOptions(data));
    };
    fetchCountries()
      .then(fetchProfile().catch(console.error))
      .then(regionOptions[0] ? setRegion(regionOptions[0].name) : setRegion(""))
      .catch(console.error);
  }, []);

  const validateData = () => {
    let validate = true;
    if (password !== confirmPassword) {
      setErrors((errs) => [
        ...errs,
        { message: "Your password and confirmation password don't match" },
      ]);
      validate = false;
    }
    if (!validateEmail(email)) {
      setErrors((errs) => [
        ...errs,
        { message: "Your email doesn't satisfy the usual policy" },
      ]);
      validate = false;
    }
    if (!validateInput(username)) {
      setErrors((errs) => [
        ...errs,
        { message: "Your username cannot use special characters" },
      ]);
      validate = false;
    }
    return validate;
  };

  const handleSubmit = async (e) => {
    setErrors([]);
    e.preventDefault();
    if (validateData()) {
      const data = {
        user: {
          username: username,
          email: email,
          description: description,
          country_id: country,
          region_id: region,
          notification_subscription: notification,
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
    }
  };

  useEffect(() => {
    if (country) {
      const fetchRegions = async () => {
        await APIManager.getRegionsFromCountryID(country).then((data) => {
          setRegionOptions(data);
        });
      };
      fetchRegions().catch(console.error);
    }
  }, [country]);

  return (
    <>
      <h1 className="register-title">Edit your Profile</h1>
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
          <label htmlFor="description">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
            placeholder="Description"
          />
        </div>

        <div className="input-container">
          <label htmlFor="country_id">Country</label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            id="country"
            name="country"
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
          <label htmlFor="region_id">Region</label>
          <select
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            id="region"
            name="region"
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
        <div className="input-container-notif">
          <label htmlFor="notification_subscription">Notification</label>
          <input
            type="checkbox"
            id="notification_subscription"
            name="notification_subscription"
            checked={notification}
            readOnly={false}
            onChange={(e) => setNotification(e.target.checked)}
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
        <input type="submit" value="Edit profile" />
      </form>
    </>
  );
};

export default EditProfile;
