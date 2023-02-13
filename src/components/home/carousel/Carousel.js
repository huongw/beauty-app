import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import galleryData from '../../../data/galleryData';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        initialSlide: 1
      }
    }
  ]
};

export default function Carousel() {
  const navigate = useNavigate();

  const navigateToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div className="slide-container">
      <h2>
        Featured Nails
      </h2>
        <Slider {...settings}>
          {
            galleryData.map(img => {
              return (
                <img key={img.id} src={img.src} alt={img.alt}/>
                )
              })
            }
        </Slider>
        <button className="navigation" onClick={navigateToGallery}>View Our Gallery</button>
      </div>
  )
}