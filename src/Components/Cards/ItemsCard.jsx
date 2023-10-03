import React from "react";
import "./itemsCard.css";
import { GrStar } from "react-icons/gr";
import { LiaStar } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function itemsCard({
  title,
  price,
  description,
  CardImg,
  CardImg2,
  CardImg3,
  CardImg4,
  C2Img,
  C2Img2,
  C2Img3,
  C2Img4,
  C3Img,
  C3Img2,
  C3Img3,
  C3Img4,
  C4Img,
  C4Img2,
  C4Img3,
  C4Img4,
  C5Img,
  C5Img2,
  C5Img3,
  C5Img4,
  C6Img,
  C6Img2,
  C6Img3,
  C6Img4,
  C7Img,
  C7Img2,
  C7Img3,
  C7Img4,
  C8Img,
  C8Img2,
  C8Img3,
  C8Img4,
  C9Img,
  C9Img2,
  C9Img3,
  C9Img4,
  C10Img,
  C10Img2,
  C10Img3,
  C10Img4,
}) {
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
  return (
    <div className="itmCard">
      <section className="itmCard-top">
        <div className="itmCard-top1">
          <h4>{title}</h4>
        </div>
        <div className="itmCard-top2">
          <div className="itmCard-top2LFT">
            <p>${price}</p>
          </div>
          <div className="itmCard-top2RYT">
            <span>
              <GrStar className="itmCard-top2RYT-icn" />
              <GrStar className="itmCard-top2RYT-icn" />
              <GrStar className="itmCard-top2RYT-icn" />
              <GrStar className="itmCard-top2RYT-icn" />
            </span>
            <LiaStar className="itmCard-top2RYT-icn" />
          </div>
        </div>
      </section>
      <section className="itmCard-mid">
        <Slider {...settings}>
          <img src={CardImg} alt="" />
          <img src={CardImg2} alt="" />
          <img src={CardImg3} alt="" />
          <img src={CardImg4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C2Img} alt="" />
          <img src={C2Img2} alt="" />
          <img src={C2Img3} alt="" />
          <img src={C2Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C3Img} alt="" />
          <img src={C3Img2} alt="" />
          <img src={C3Img3} alt="" />
          <img src={C3Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C4Img} alt="" />
          <img src={C4Img2} alt="" />
          <img src={C4Img3} alt="" />
          <img src={C4Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C5Img} alt="" />
          <img src={C5Img2} alt="" />
          <img src={C5Img3} alt="" />
          <img src={C5Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C6Img} alt="" />
          <img src={C6Img2} alt="" />
          <img src={C6Img3} alt="" />
          <img src={C6Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C7Img} alt="" />
          <img src={C7Img2} alt="" />
          <img src={C7Img3} alt="" />
          <img src={C7Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C8Img} alt="" />
          <img src={C8Img2} alt="" />
          <img src={C8Img3} alt="" />
          <img src={C8Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C9Img} alt="" />
          <img src={C9Img2} alt="" />
          <img src={C9Img3} alt="" />
          <img src={C9Img4} alt="" />
        </Slider>
        <Slider {...settings}>
          <img src={C10Img} alt="" />
          <img src={C10Img2} alt="" />
          <img src={C10Img3} alt="" />
          <img src={C10Img4} alt="" />
        </Slider>
      </section>
      <section className="itmCard-bttm">
        <div className="itmCard-bttmUP">
          <p>{description}</p>
        </div>
        <div className="itmCard-bttmDWN">
          <button className="DWN-icn1">
            <FaShoppingCart /> add to cart
          </button>
        </div>
      </section>
    </div>
  );
}
