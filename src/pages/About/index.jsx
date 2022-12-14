import dechet from "../../assets/images/dechet.avif";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>

      <div className="card about-goal">
        <div className="about-goal-left">
          <img src={dechet} alt="beach image" />
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
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi?
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png"
              alt="member-picture"
            />
          </div>
          <div className="card member-card">
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi?
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png"
              alt="member-picture"
            />
          </div>
          <div className="card member-card">
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi?
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png"
              alt="member-picture"
            />
          </div>
          <div className="card member-card">
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi?
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png"
              alt="member-picture"
            />
          </div>
          <div className="card member-card">
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi?
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png"
              alt="member-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
