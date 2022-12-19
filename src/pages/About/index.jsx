import home2 from "../../assets/images/home2.png";
import greg from "../../assets/images/greg.png";
import sam from "../../assets/images/sam.png";
import pierro from "../../assets/images/pierro.png";
import noellie from "../../assets/images/noellie.png";
import chris from "../../assets/images/chris.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <img
        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
        alt="beach on sunrise"
        className="aboutHeroImage"
      />
      <div className="aboutHero">
        <h1>About us</h1>
      </div>

      <div className="card aboutGoal">
        <div className="aboutGoalImg">
          <img src={home2} alt="leaves logo" />
        </div>
        <div className="aboutGoalContent">
          <h2>Our goal</h2>
          <p>
            More and more environmentalists are working towards a common goal:
            to collect the garbage on the streets, country roads, bike paths and
            public places in order to make their environment more livable. Our
            society is a throwaway society. It is easier for us to throw rather
            than reuse or repair them. Air and water are vital, but today they
            have become big garbage dumps. Each and every one of us must do our
            part to save the planet. Our goal is to find the location of the
            area to be cleaned and involve as many people as possible.
          </p>
        </div>
      </div>
      <div className="aboutTeam">
        <h2>Our team</h2>
        <div className="teamCards">
          <div className="card memberCard">
            <h3>ANDRIEU Pierre</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/PierreAND" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/pierre-andrieu-4103bb176/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={pierro} alt="Pierre illustration"></img>
          </div>
          <div className="card memberCard">
            <h3>LAIGNEAU Gregory</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/GregoryLAIGNEAU" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/gregory-laigneau-a92871119/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={greg} alt="Greg illustration"></img>
          </div>
          <div className="card memberCard">
            <h3>LINARD Sami</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/Samsou1" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sami-linard-87ab55138/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={sam} alt="Sam illustration"></img>
          </div>
          <div className="card memberCard">
            <h3>PEUCH Noellie</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/pandaka87" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/noellie-peuch/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={noellie} alt="Noellie illustration"></img>
          </div>
          <div className="card memberCard">
            <h3>PFEIFFER Christopher</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/chrispfr" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://github.com/PierreAND" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={chris} alt="Chris illustration"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
