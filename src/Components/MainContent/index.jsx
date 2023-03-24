import Slider from "react-slick";
import leandro from "../../Img/Leandro.jpg";
import leandro2 from"../../Img/leandro2.jpg";
import leandro3 from"../../Img/leandro3.jpg";
import leandro4 from"../../Img/leandro4.jpg";
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
};

export default function MainContent() {
  return (
    <main className="main-container">
      <Slider {...settings}
      autoplay={true}
      
      arrows={false}
      alt= "" className="sliderContainer">

        <div className="slider">
          <img src={leandro} alt=""/>
        </div>
        
        <div className="slider">
          <img src={leandro2} alt=""/>
        </div>
         
        <div className="slider">
          <img src={leandro3} alt=""/>
        </div>

        <div className="slider">
          <img src={leandro4} alt=""/>
        </div>

      </Slider>
    </main>
  );
}
