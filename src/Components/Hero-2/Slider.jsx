import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Cards/itemsCard.css";

const Hero2Slide = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul className="slick-dots"> {dots}</ul>;
    // },
  };
  console.log(images);
  return (
    <Slider {...settings}>
      <img className="item-img" src={images[0]} alt="" />
      <img className="item-img" src={images[1]} alt="" />
      <img className="item-img" src={images[2]} alt="" />
      <img className="item-img" src={images[3]} alt="" />
    </Slider>
  );
};

export default Hero2Slide;
