import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import videoBg from "../../videos/videoBg.mp4";

const Hero = () => {
  if (Cookies.get('currentUser')) {
    return (
      // autoPlay loop (Add it later before muted)
      <section className="hero-container">
        <video src={videoBg} muted></video>
        <div>
          <h1>Bienvenue sur TerraGreen</h1>
          <p>Participez à sauver la planète !</p>
          <Link to="/register">S'inscrire</Link>
        </div>
      </section>
    )
      //);
    } else {
      return (
        // autoPlay loop (Add it later before muted)
        <section className="hero-container">
          <video src={videoBg} muted></video>
          <div>
            <h1>Bienvenue sur TerraGreen</h1>
            <p>Participez à sauver la planète !</p>
            <Link to="/register">S'inscrire</Link>
          </div>
          <hr/>
        </section>
        
      );
    };
  }


export default Hero;
