import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  return(
    <nav className="NavbarItems">
      
        <Link to="/">
        <img src={logo} alt="logo" className="logo"></img>
            TerraGreen
         </Link>
         
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-links">
          <i className="fa-solid fa-house-user"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
          <i className="fa-solid fa-circle-info"></i>About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-links">
          <i className="fa-solid fa-briefcase"></i>Projects
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-links">
          <i className="fa-solid fa-house-user"></i>Login
          </Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;