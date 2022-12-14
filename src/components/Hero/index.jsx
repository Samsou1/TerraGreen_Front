import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import videoBg from "../../videos/videoBg.mp4";

const Hero = () => {
  if (Cookies.get("currentUser")) {
    return (
      // autoPlay loop (Add it later before muted)
      <section className="hero-container">
        <video src={videoBg} autoPlay loop muted></video>
        <div>
          <h1>Bienvenue sur TerraGreen</h1>
          <p>Créer ton projet TerraGreen</p>
           <Link to="/newproject">New Project</Link>
        </div>
      </section>
<<<<<<< HEAD
    );
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
      </section>
    );
=======
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
>>>>>>> e20bac5f21098ab5889c0848519c0d7d0d8c8583
  }
};

export default Hero;
