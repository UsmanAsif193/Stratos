import React from "react";
import Slider from "react-slick";

const WaitListSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    dotsClass: "slick-dots waitListSliderDots",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={"./assets/slider-image-1.png"} alt="" />
        </div>
        <div>
          <img src={"./assets/slider-image-1.png"} alt="" />
        </div>
        <div>
          <img src={"./assets/slider-image-1.png"} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default WaitListSlider;
