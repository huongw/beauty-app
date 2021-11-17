import small_img1 from '../../../images/small-img1.jpg';
import small_img2 from '../../../images/small-img2.jpg';
import pink_img from '../../../images/pink-img.jpg';
import './menuIntro.css';
import { Link } from 'react-router-dom';


function MenuIntro() {
  return (
    <section className="menu-section">
      <h2>Our Services</h2>
      <div className="img-container">
        <div className="span-titles">
          <span>Nails.</span>
          <span>Facials.</span>
          <span>Lashes.</span>
        </div>

        <img
          className="small-img2 menu-stag"
          src={small_img2}
          alt=""
        />
        <img
          className="large-img2 menu-stag"
          src={pink_img}
          alt=""
        />
        <img
          className="small-img1 menu-stag"
          src={small_img1}
          alt=""
        />

      </div>
      <div className="menu-desc">
        <p>
          *Our services are 100% customizable to your needs.
        </p>
        <Link to="/menu" className="menu-link">
          Our Menu
        </Link>
      </div>
    </section>

  );
}

export default MenuIntro;
