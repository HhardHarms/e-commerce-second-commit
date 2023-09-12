import React from "react";
import "./heroBttmSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeroBttmSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="herroBttmSlider-container">
      <Slider {...settings}>
        <div className="herroBttmSlider-item-slider-1">
          <div className="herroBttmSlideCONT1">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Shirts</button>
              <button className="herroBttmSliderBttn">
                0ver 5k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-2">
          <div className="herroBttmSlideCONT2">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Bags</button>
              <button className="herroBttmSliderBttn">
                0ver 2.5k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-3">
          <div className="herroBttmSlideCONT3">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Footwears</button>
              <button className="herroBttmSliderBttn">
                0ver 3k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-4">
          <div className="herroBttmSlideCONT4">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Jewelries</button>
              <button className="herroBttmSliderBttn">
                0ver 1.5k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-5">
          <div className="herroBttmSlideCONT5">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Wrist-watches</button>
              <button className="herroBttmSliderBttn">
                0ver 1k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-6">
          <div className="herroBttmSlideCONT6">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">T-shirts</button>
              <button className="herroBttmSliderBttn">
                0ver 3k orders this week
              </button>
            </div>
          </div>
        </div>

        <div className="herroBttmSlider-item slider-7">
          <div className="herroBttmSlideCONT7">
            <div className="herroBttmSliderTXT">
              <button className="herroBttmSliderBttn">Jackets</button>
              <button className="herroBttmSliderBttn">
                0ver 3k orders this week
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroBttmSlider;
