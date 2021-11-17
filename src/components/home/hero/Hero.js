import './hero.css';

function Hero() {

  return (
    <section className="hero">
      <div className="hero_bg"></div>
      <div className="welcome">
        <h2 id="hero-title">Awaken your inner goddess.</h2>
        <a href="#" className="btn" id="cta">Book Now</a>
      </div>
    </section>
  );
}

export default Hero;
