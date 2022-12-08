import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  return(
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <ul className="nav-menu">
        <li>
          <Link>
          Home</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;