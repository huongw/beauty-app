import small_img1 from '../../../images/small-img1.jpg';
import small_img2 from '../../../images/small-img2.jpg';
import pink_img from '../../../images/pink-img.jpg';
import flower from '../../../images/flower.png';
import grey_blob from '../../../images/bg-blobs/grey-dots.png';
import green_blob from '../../../images/bg-blobs/green-dots-top.png';


import './menuIntro.css';
import { Link } from 'react-router-dom';


function MenuIntro() {
  return (
    <section className="menu-section">
      <h2>
        Our Services
        <img className="flower" src={flower} alt="" />
      </h2>
      <div className="img-container">
        <div className="span-titles">
          <span>Nails.</span>
          <span>Facials.</span>
          <span>Lashes.</span>
        </div>

        <img
          className="small-img2"
          src={small_img2}
          alt=""
        />
        <img
          className="large-img2"
          src={pink_img}
          alt=""
        />
        <img
          className="small-img1"
          src={small_img1}
          alt=""
        />
        <img className="grey-blob" src={grey_blob} alt="" />
        <img className="green-blob" src={green_blob} alt="" />
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
