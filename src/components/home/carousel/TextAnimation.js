import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const settings = {
  infinite: true,
  dots: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  speed: 2000,
  pauseOnHover: false
}

export default function TextAnimation() {
  return (
    <div className="text-animation-container">
    <Slider {...settings}>
      <span className="text">Be a Goddess.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
      <span className="text">Be a Goddess.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
      <span className="text">Be a Goddess.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
    </Slider>
    </div>
  )
}