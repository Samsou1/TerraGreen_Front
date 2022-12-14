import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../components/Errors";

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const setAll = (data) => {
    data.email ? setEmail(data.email) : setEmail("");
    data.username ? setUsername(data.username) : setLastName("");
    data.description ? setDescription(data.description) : setDescription("");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      await APIManager.getUser().then((data) => setAll(data));
    };
    fetchProfile().catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = {
        user: {
          username: username,
          email: email,
          description: description,
        },
      };
      if (password !== "") {
        data.user.password = password;
      }
      try {
        await APIManager.editProfile(data);
        navigate("/profile");
      } catch (err) {
        console.error(err);
      }
    } else {
      throw new Error(
        "The password and the confirmation password are different"
      );
    }
  };

  return (
    <>
      <h1 className="register-title">Edit Profile</h1>
      <Errors errors={errors}/>
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
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="textarea"
            id="description"
            placeholder="Description"
          />
        </div>
        <input type="submit" value="Edit profile" />
      </form>
    </>
  );
};

export default EditProfile;
