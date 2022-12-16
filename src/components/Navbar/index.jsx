import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LogoutButton from "../LogoutButton";
import { userLoggedInAtom } from "../../store/user";
import { useAtomValue } from "jotai";



const Navbar = () => {


  const userLoggedIn = useAtomValue(userLoggedInAtom);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  //change nav color when scroling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90 ) {
      setColor(true)
    } else {
      setColor()
    }
  }

  window.addEventListener('scroll', changeColor);

  //if (userLoggedIn) {
    return (
      <header className={color ? 'header header-bg' : 'header'}>
        <div>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <Link to="/">
            <h1 className="company">TerraGreen</h1>
          </Link>
        </div>
        <nav>
          {(toggleMenu || width > 768) && (
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <div className="sec-center"> 	
                  <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                  {userLoggedIn ? (
                    <>
                      <label className="for-dropdown" htmlFor="dropdown">Profile</label>
                      <div className="section-dropdown"> 
                        <Link to="/profile">Profile</Link>
                        <Link to="/myprojects">My projects</Link>
                        <LogoutButton />
                      </div>
                    </>
                    ) 
                  :
                    (
                      <>
                        <label className="for-dropdown" htmlFor="dropdown">Connect</label>
                        <div className="section-dropdown"> 
                          <Link to="/login">Login</Link>
                          <Link to="/register">Register</Link>
                        </div>
                    </>
                    )
                  }
                </div>
              </li>
            </ul>
          )}
          <div id="nav"
            onClick={toggleNav}
            className={toggleMenu ? "plate active" : "plate"}
          >
            <svg
              className="toggle-button burger"
              version="1.1"
              height="100"
              width="100"
              viewBox="0 0 100 100"
            >
              <path
                className="line line1"
                d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
              />
              <path
                className="line line2"
                d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
              />
              <path
                className="line line3"
                d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
              />
              <path
                className="line line4"
                d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
              />
              <path
                className="line line5"
                d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
              />
              <path
                className="line line6"
                d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
              />
            </svg>
            <svg
              className="toggle-button x"
              version="1.1"
              height="100"
              width="100"
              viewBox="0 0 100 100"
            >
              <path className="line" d="M 34,32 L 66,68" />
              <path className="line" d="M 66,32 L 34,68" />
            </svg>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;
