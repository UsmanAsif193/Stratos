/* eslint-disable @next/next/no-img-element */
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
        <img src={"./assets/slider-image-1.png"} alt="" />
        <img src={"./assets/slider-image-1.png"} alt="" />
        <img src={"./assets/slider-image-1.png"} alt="" />
      </Slider>
    </div>
  );
};

export default WaitListSlider;
