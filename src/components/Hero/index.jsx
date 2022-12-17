import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import videoBg from "../../assets/videos/videoBg.mp4";

const Hero = () => {
  if (Cookies.get("currentUser")) {
    return (
      // autoPlay loop (Add it later before muted)
      <section className="hero-container">
        <video src={videoBg}   muted></video>
        <div>
          <h1>Welcome to TerraGreen</h1>
          <p>Create your cleaning project with TerraGreen</p>
           <Link to="/newproject">New Project</Link>
        </div>
      </section>
    )
      //);
    } else {
      return (
        // autoPlay loop (Add it later before muted)
        <section className="hero-container">
          <video src={videoBg}  loop></video>
          <div>
            <h1>Welcome to TerraGreen</h1>
            <p>Participate to save Earth!</p>
            <Link to="/register">Register</Link>
          </div>
          <hr/>
        </section>
        
      );
    };
  };

export default Hero;
