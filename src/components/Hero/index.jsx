//import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import videoBg from "../../videos/videoBg.mp4";

const Hero = () => {

  return (
    // autoPlay loop (Add it later before muted)
    <section className="hero-container">
      <video src={videoBg} muted></video>
      <div>
        <h1>Bienvenue sur TerraGreen</h1>
        <p>Participez à sauver notre planète !</p>
        <Link to="/register">S'inscrire</Link>
      </div>
    </section>
    );
  
  };

export default Hero;