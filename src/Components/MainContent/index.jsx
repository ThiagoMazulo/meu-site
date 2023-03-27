import Slider from "react-slick";
import leandro from "../../assets/img/Leandro.jpg";
import leandro2 from "../../assets/img/leandro2.jpg";
import leandro3 from "../../assets/img/leandro3.jpg";
import leandro4 from "../../assets/img/leandro4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

const settings = {
  //   dots: none,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

export default function MainContent() {
  return (
    <main className="main-container">
      <Slider {...settings} className="slider">
        <div className="sliderImageContainer">
          <img src={leandro} alt="" />
        </div>

        <div className="sliderImageContainer">
          <img src={leandro2} alt="" />
        </div>

        <div className="sliderImageContainer">
          <img src={leandro3} alt="" />
        </div>

        <div className="sliderImageContainer">
          <img src={leandro4} alt="" />
        </div>
      </Slider>
    </main>
  );
}
