import home2 from "../../assets/images/home2.png";
import greg from "../../assets/images/greg.png";
import sam from "../../assets/images/sam.png";
import pierro from "../../assets/images/pierro.png";
import noellie from "../../assets/images/noellie.png";
import chris from "../../assets/images/chris.png";

const About = () => {
  return (
    <div className="about">
      <img
        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
        alt="logo"
        className="img1"
      ></img>
      <div className="about-hero">
        <h1>About us</h1>
      </div>

      <div className="card about-goal">
        <div className="about-goal-left">
          <img src={home2} alt="beach image" />
        </div>
        <div className="about-goal-right">
          <h2 className="about-goal-title">Our goal</h2>
          <p className="about-content">
            More and more environmentalists are working towards a common goal:
            to collect the garbage on the streets, country roads, bike paths and
            public places in order to make their environment more livable. Our
            society is a throwaway society. It is easier for us to throw things
            away. Air and water are vital, but today they have become big
            garbage dumps. Each and every one of us must do our part to save the
            planet. Our goal is to find the location of the area to be cleaned
            and involve as many people as possible..{" "}
          </p>
        </div>
      </div>
      <div className="about-team">
        <h2>Our team</h2>
        <div className="team-cards">
          <div className="card member-card">
            <h3>ANDRIEU Pierre</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/PierreAND">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://github.com/PierreAND">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={pierro} alt="logo"></img>
          </div>
          <div className="card member-card">
            <h3>LAIGNEAU Gregory</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/GregoryLAIGNEAUD">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://github.com/PierreAND">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={greg} alt="logo"></img>
          </div>
          <div className="card member-card">
            <h3>Linard Sami</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/Samsou1">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://github.com/PierreAND">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={sam} alt="logo"></img>
          </div>
          <div className="card member-card">
            <h3>PEUCH Noellie</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/pandaka87">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/noellie-peuch/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={noellie} alt="logo"></img>
          </div>
          <div className="card member-card">
            <h3>PFEIFFER Christopher</h3>
            <p>Developer at TerraGreen</p>
            <div>
              <a href="https://github.com/chrispfr">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://github.com/PierreAND">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <img src={chris} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
