import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const setAll = (data) => {
    data.email? setEmail(data.email):setEmail("");
    data.first_name? setFirstName(data.first_name): setFirstName("");
    data.last_name? setLastName(data.last_name):setLastName("");
  }

  useEffect(() => {
    const fetchProfile = async () => { await APIManager.getUser().then(data => setAll(data))};
    fetchProfile().catch(console.error);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === confirmPassword){
      const data = {
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
        }
      }
      if(password !== ""){
        data.user.password = password;
      }
      try {
        await APIManager.editProfile(data);
        navigate('/profile');
      } catch (err) {
        console.error(err)
      }
    }else{
      throw new Error("The password and the confirmation password are different")
    }
  }

  return (
    <>
      <h1 className="register-title">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="register-form-container">
        <div className='input-container'>
          <label htmlFor="email">Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            placeholder="Password"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <input type="submit" value="Edit profile" />
      </form>
    </>
  )
}

export default EditProfile;