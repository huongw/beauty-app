import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const settings = {
  infinite: true,
  dots: false,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  speed: 5000,
  pauseOnHover: false,
}

export default function TextAnimation() {
  return (
    <div className="text-animation-container">
    <Slider {...settings}>
      <span className="text">Godess Energy.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
      <span className="text">Godess Energy.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
      <span className="text">Godess Energy.</span>
      <span className="text">Think Positive.</span>
      <span className="text">Be Sexy.</span>
    </Slider>
    </div>
  )
}