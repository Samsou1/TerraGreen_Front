import Hero from "../../components/Hero";

const Home = () => {
  return (
    <>
    <Hero />
    <section class="artboard">
      <div class="card">
        <div class="card__side card__side--back">
          <div class="card__cover">
           <h4 class="card__heading">
             <span class="card__heading-span">Les bonnes raisons</span>
           </h4>
          </div>
          <div class="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
              </ul>
          </div>
      </div>
      <div class="card__side card__side--front">
        <div class="card__theme">
          <div class="card__theme-box">
            <p class="card__subject">Participer à l'effort collectif</p>
            <p class="card__title"> Pourquoi ? </p>
        </div>
    </div>
  </div>
</div>
 <div class="card">

  <div class="card__side card__side--back">
   <div class="card__cover">
    <h4 class="card__heading">
     <span class="card__heading-span">Plus que tu ne le crois</span>
    </h4>
   </div>
   <div class="card__details">
    <ul>
     <li>Advanced JS and CSS</li>
     <li>JS/CSS Preprocessors</li>
     <li>JS Frameworks</li>
     <li>Advanced Animations</li>
     <li>Deployment Pipelines</li>
     <li>Large Apps Architectures</li>
     <li>Naming Conventions</li>
    </ul>
   </div>
  </div>

  <div class="card__side card__side--front">
   <div class="card__theme">
    <div class="card__theme-box">
     <p class="card__subject">D'autres peuvent se joindre à toi !</p>
     <p class="card__title"> Qui ? </p>
    </div>
   </div>
  </div>

 </div>
 <div class="card">

  <div class="card__side card__side--back">
   <div class="card__cover">
    <h4 class="card__heading">
     <span class="card__heading-span">Aussi simple que ça</span>
    </h4>
   </div>
   <div class="card__details">
    <ul>
     <li>Advanced JS and CSS</li>
     <li>JS/CSS Preprocessors</li>
     <li>JS Frameworks</li>
     <li>Advanced Animations</li>
     <li>Deployment Pipelines</li>
     <li>Large Apps Architectures</li>
     <li>Naming Conventions</li>
    </ul>
   </div>
  </div>

  <div class="card__side card__side--front">
   <div class="card__theme">
    <div class="card__theme-box">
     <p class="card__subject">Plus facile qu'il n'y parait</p>
     <p class="card__title"> Comment ? </p>
    </div>
   </div>
  </div>

 </div>
</section>
  </>
  );
};

export default Home;
