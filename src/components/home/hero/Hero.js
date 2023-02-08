import { useNavigate } from 'react-router-dom';
import {motion, useScroll, useTransform} from "framer-motion/dist/framer-motion";
import './hero.css';

function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600])

  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/contact');
  };

  return (
    <section className="hero">
      <div className="hero_bg">
        <h2 className="headline">Discover Vegan products that will love your skin</h2>
        <button className="shop-now" onClick={navigateToShop}>Shop Now</button>
      </div>
      <motion.h3 id="slogan"
        style={{ x: x }}
      >
        Awaken your inner goddess. Awaken your inner goddess.
      </motion.h3>
    </section>
  );
}

export default Hero;
