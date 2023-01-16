import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import galleryData from '../../../data/galleryData';
import { NavLink } from 'react-router-dom';


export default function Carousel() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className="slide-container">
      <h2>Featured</h2>
        <NavLink to={"/gallery"}>
          <Slider {...settings}>
            {
              galleryData.map(img => {
                return (
                  <img src={img.src} alt={img.alt}/>
                  )
                })
              }
          </Slider>
        </NavLink>
      </div>
  )
}