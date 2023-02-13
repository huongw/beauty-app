import {motion, useScroll, useTransform} from "framer-motion/dist/framer-motion";
import './hero.css';

function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600])

  return (
    <section className="hero">
      <div className="hero_bg">
        <h2 className="headline">Rejuvenate Your Skin Glow with Luna Beaute</h2>
        <button className="book-now">Book Appointment</button>
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
