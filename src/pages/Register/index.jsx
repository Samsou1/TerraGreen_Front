import { useState } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../../services/validateUserData";
import Errors from "../../components/Errors";
import { useSetAtom } from "jotai";
import { userLoggedInAtom } from "../../store/user";
import { userLoggedIn } from "../../services/user";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const setUser = useSetAtom(userLoggedInAtom);

  const handleSubmit = async (e) => {
    setErrors([]);
    e.preventDefault();
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    if (!validateEmail(email)) {
      setErrors([
        { message: "The email doesn't match the standard email structure" },
      ]);
    } else if (!validatePassword(password)) {
      setErrors([
        {
          message:
            "The password must have at least one lowercase, one uppercase, one digit and be longer than 6 characters",
        },
      ]);
    } else if (password !== confirmPassword) {
      setErrors([
        { message: "The password and the confirmation password don't match" },
      ]);
    } else {
      try {
        await APIManager.registerUser(data);
        if(userLoggedIn()){
          setUser(true);
        }
        navigate("/");
      } catch (err) {
        setErrors([{ message: "This email is already taken" }]);
        console.error(err);
      }
    }
  };

  return (
    <>
      <h1 className="formTitle">Register</h1>
      <Errors errors={errors}></Errors>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formInputContainer">
          <label htmlFor="email">Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="formInputContainer">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="formInputContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            placeholder="Password"
          />
        </div>
        <input type="submit" value="Register" />
        <p>
          Already have an account?{" "}
          <span>
            <Link className="link" to="/login">
              Log in
            </Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default Register;
