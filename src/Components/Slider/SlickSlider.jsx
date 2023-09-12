import React from "react";
import "./slickslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul className="slick-dots"> {dots}</ul>;
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item slider-1">
          <div className="slideCONT1">
            <div className="slideCONT-txt1">
              <div className="left1">
                <p>
                  hot summer / <span>autumn</span>collection
                </p>
                <h1>
                  get up to 30% off <br /> new arrivals
                </h1>
                <button className="btn-primary1">shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item slider-2">
          <div className="slideCONT2">
            <div className="slideCONT-txt2">
              <div className="left2">
                <h1>
                  embrace your <br /> inner sports side
                </h1>
                <button className="btn-primary2">
                  discover the collection
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item slider-3">
          <div className="slideCONT3">
            <div className="slideCONT-txt3">
              <div className="left3">
                <p>60% discount</p>
                <h1>
                  winter <br /> collection
                </h1>
                <h3>best cloth collection by 2024</h3>
                <button className="btn-primary3">Visit Collection</button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item slider-4">
          <div className="slideCONT4">
            <div className="slideCONT-txt4">
              <div className="left4">
                <h3>find your perfect</h3>
                <h1>
                  demim <span>shorts & all</span>
                </h1>
                <p>
                  introducing our essential fit guide because we take this
                  summer <br /> staple <span>very</span>seriously
                </p>
                <button className="btn-primary4">find your fit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item slider-5">
          <div className="slideCONT5">
            <div className="slideCONT-txt5">
              <div className="left5">
                <p>limited time</p>
                <h1>
                  summer
                  <br />
                  <span>sale</span>
                </h1>
                <p>up to 65% off</p>
                <button className="btn-primary5">shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item slider-6">
          <div className="slideCONT6">
            <div className="slideCONT-txt6">
              <div className="left6">
                <h1>
                  more <br /> than <br /> casual
                </h1>
                <button className="btn-primary6">check out collection</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SlickSlider;
