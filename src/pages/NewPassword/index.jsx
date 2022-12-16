import APIManager from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState(null);
  const [pwdConfirmation, setPwdConfirmation] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const token = searchParams.get('reset_token')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        password: password,
        password_confirmation: pwdConfirmation,
        reset_password_token: token
      },
    };
    try {
      await APIManager.setNewPassword(data)
      navigate("/login")
    } catch {
      console.error(err)
    }
  };

  return (
    <>
        <h1 className="title-form">Set your new password</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <div className="input-container">
          <label htmlFor="email">New password </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="email">Password Confirmation </label>
          <input
            onChange={(e) => setPwdConfirmation(e.target.value)}
            value={pwdConfirmation}
            type="password"
            id="password"
            placeholder="Password Confirmation"
          />
        </div>
        <button>Reset password</button>
      </form>

    </>
  )
}

export default NewPassword;
