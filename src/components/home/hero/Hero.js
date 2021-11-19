import './hero.css';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <section className="hero">
      <div className="hero_bg"></div>
      <div className="welcome">
        <h2 id="hero-title">
          <span className="logo logo-design">Luna Beaute</span>
          <br />
          Awaken your inner goddess
        </h2>
        <Link to="/menu" className="cta">
          View Menu
        </Link>
      </div>

    </section>
  );
}

export default Hero;
