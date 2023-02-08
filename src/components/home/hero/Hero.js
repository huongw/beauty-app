import {motion, useScroll, useTransform} from "framer-motion/dist/framer-motion";
import './hero.css';

function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600])

  return (
    <section className="hero">
      <div className="hero_bg">
          <motion.h2 id="slogan"
            style={{ x: x }}
          >
            Awaken your inner goddess
          </motion.h2>
      </div>
    </section>
  );
}

export default Hero;
