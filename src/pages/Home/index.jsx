import Hero from "../../components/Hero";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";
import home3 from "../../assets/images/home3.png";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="home-container">
        <article>
          <img src={home1} alt="logo" className="img1"></img>
          <h1>Why?</h1>
          <p className="p1">
            Because it is important to offer a bright future to future
            generations, who do not have to suffer from our mistakes
          </p>
        </article>

        <article>
          <img src={home2} alt="logo" className="img2"></img>
          <h1>Who?</h1>
          <p className="p2">
            Everyone can participate, your family, your friends, your coworkers,
            just suggest it!
          </p>
        </article>

        <article>
          <img src={home3} alt="logo" className="img3"></img>
          <h1>How?</h1>
          <p className="p3">
            With your desire and your motivation! A bag and gloves and off you
            go for the forest or the nearest beach!
          </p>
        </article>
      </section>
      <h1 className="title-home">You can also take inspiration from some!</h1>
      <section className="carousel-container">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <article id="carousel">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </article>
      </section>
    </>
  );
};

export default Home;
