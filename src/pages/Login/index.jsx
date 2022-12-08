import { useState } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Errors from "../../components/Errors";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    setErrors([])
    e.preventDefault();
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    try {
      await APIManager.loginUser(data);
      console.log(data)
      navigate("/");
      window.location.reload();
    } catch{
      setErrors([{message:'Invalid password or email'}])
    }
  };

  return (
    <>
      <h1 className="login-title">Login</h1>
      <Errors errors={errors}></Errors>
      <form onSubmit={handleSubmit} className="login-form-container">
        <div className="input-container">
          <label htmlFor="username">Email</label>
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
        <Link className="login-forgot-password" to="/resetpassword">
          Forgot your password?
        </Link>
        <input type="submit" value="Login" />
        <div className="login-no-account">
          <p>
            Don't have an account?{" "}
            <span>
              <Link className="link" to="/register">
                Register
              </Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
