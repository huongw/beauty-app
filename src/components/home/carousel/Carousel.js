import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryData from '../../../data/galleryData';
import { NavLink } from 'react-router-dom';


export default function Carousel() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
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
  )
}