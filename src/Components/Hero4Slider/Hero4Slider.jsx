import React from "react";
import "./hero4Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hero4slide1 from "../Hero4SliderImages/raybandiscount1.jpeg";
import hero4slide2 from "../Hero4SliderImages/footwear5.jpg";
import hero4slide3 from "../Hero4SliderImages/hatdiscount1.jpg";
import hero4slide4 from "../Hero4SliderImages/montblancdicount1.jpg";
import hero4slide5 from "../Hero4SliderImages/jeweldicount1.jpg";
import hero4slide6 from "../Hero4SliderImages/raybanddiscount3.jpeg";
import hero4slide7 from "../Hero4SliderImages/footwear3.jpg";
import hero4slide8 from "../Hero4SliderImages/capdiscount1.jpeg";
import hero4slide9 from "../Hero4SliderImages/femaleshirtdiscount1.jpeg";
import hero4slide10 from "../Hero4SliderImages/footwear7.jpg";
import hero4slide11 from "../Hero4SliderImages/tshirtdiscount1.jpeg";
import hero4slide12 from "../Hero4SliderImages/hublotdiscount1.jpg";
import hero4slide13 from "../Hero4SliderImages/shirtdiscount1.jpeg";
import hero4slide14 from "../Hero4SliderImages/jeweldiscount3.jpg";
import hero4slide15 from "../Hero4SliderImages/capdiscount3.jpeg";
import hero4slide16 from "../Hero4SliderImages/hatdiscount5.jpeg";
import hero4slide17 from "../Hero4SliderImages/femalebagdicount1.jpeg";
import hero4slide18 from "../Hero4SliderImages/femaletshirtdiscount.jpeg";
import hero4slide19 from "../Hero4SliderImages/jeweldiscount2.jpg";
import hero4slide20 from "../Hero4SliderImages/hublotdicount2.jpg";
import hero4slide21 from "../Hero4SliderImages/hatdiscount2.jpeg";
import hero4slide22 from "../Hero4SliderImages/femaletshirtdiscount3.jpeg";
import hero4slide23 from "../Hero4SliderImages/femalebagdiscount2.jpeg";
import hero4slide24 from "../Hero4SliderImages/hatdiscount3.jpeg";
import hero4slide25 from "../Hero4SliderImages/capdiscount6.jpeg";
import hero4slide26 from "../Hero4SliderImages/femaleshirtdiscount2.jpeg";
import hero4slide27 from "../Hero4SliderImages/hatdiscount4.jpeg";
import hero4slide28 from "../Hero4SliderImages/bagdiscount2.jpeg";
import hero4slide29 from "../Hero4SliderImages/jeweldiscount4.jpeg";
import hero4slide30 from "../Hero4SliderImages/tshirtdiscount2.jpeg";
import hero4slide31 from "../Hero4SliderImages/femalebagdiscount3.jpeg";
import hero4slide32 from "../Hero4SliderImages/jeweldisount5.jpeg";
import hero4slide33 from "../Hero4SliderImages/capdiscount2.jpeg";
import hero4slide34 from "../Hero4SliderImages/bagdiscount3.jpeg";

function Hero4Slider() {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay: true,
  };

  return (
    <div className="Hero4Slider-container">
      <Slider {...settings}>
        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide1} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">rayban sunglasses</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$74.55</p>
                <p className="Herr4-PP">$84.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide2} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">classic leather shoes</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$1,650.55</p>
                <p className="Herr4-PP">$1,858.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide3} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">montblanc classy brown</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$43.55</p>
                <p className="Herr4-PP">$53.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide4} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">montblanc classic</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$900.55</p>
                <p className="Herr4-PP">$987.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide5} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">diamond bracelet</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$315.55</p>
                <p className="Herr4-PP">$368.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide6} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">rayban sunglasses</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$66.55</p>
                <p className="Herr4-PP">$76.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide7} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">vintage flat-slippers</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$38.55</p>
                <p className="Herr4-PP">$48.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide8} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">designer caps</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$33.55</p>
                <p className="Herr4-PP">$45.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide9} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">stylish vintage shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$57.55</p>
                <p className="Herr4-PP">$65.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide10} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">stylish rubbber slippers</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$29.55</p>
                <p className="Herr4-PP">$35.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide11} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">casual male t-shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$19.55</p>
                <p className="Herr4-PP">$25.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide12} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">hublot classic</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$1,855.55</p>
                <p className="Herr4-PP">$1,925.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide13} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">fancy male shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$28.55</p>
                <p className="Herr4-PP">$35.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide14} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">bridal jewelry set</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$521.55</p>
                <p className="Herr4-PP">$625.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide15} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">female wool caps</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$17.55</p>
                <p className="Herr4-PP">$21.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide16} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">vintage hats</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$15.55</p>
                <p className="Herr4-PP">$19.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide17} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">genuine leather bag</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$111.55</p>
                <p className="Herr4-PP">$135.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide18} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">summer t-shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$15.55</p>
                <p className="Herr4-PP">$18.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide19} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">luxury wedding ring</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$951.55</p>
                <p className="Herr4-PP">$1,025.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide20} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">hublot deluxe</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$799.55</p>
                <p className="Herr4-PP">$845.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide21} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">stylish female hat</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$61.55</p>
                <p className="Herr4-PP">$85.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide22} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">summer t-shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$15.55</p>
                <p className="Herr4-PP">$18.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide23} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">fancy leather bags</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$191.55</p>
                <p className="Herr4-PP">$205.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide24} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">vintage female hat</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$51.55</p>
                <p className="Herr4-PP">$65.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide25} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">fancy baseball cap</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$17.55</p>
                <p className="Herr4-PP">$19.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide26} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">vintage female t-shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$21.55</p>
                <p className="Herr4-PP">$25.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide27} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">vintage caps</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$13.55</p>
                <p className="Herr4-PP">$15.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide28} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">messenger side-bag</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$41.55</p>
                <p className="Herr4-PP">$45.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide29} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">fancy male rings</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$205.55</p>
                <p className="Herr4-PP">$225.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide30} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">stylish male t-shirts</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$21.55</p>
                <p className="Herr4-PP">$35.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide31} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">designer handbags</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$417.55</p>
                <p className="Herr4-PP">$432.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide32} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">traditional jewelry</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$120.55</p>
                <p className="Herr4-PP">$125.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide33} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">fancy female cap</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$38.55</p>
                <p className="Herr4-PP">$43.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Hero4Slide">
          <div className="Hero4slider">
            <div className="Hero4slider-Top">
              <img src={hero4slide34} alt="" />
            </div>
            <div className="Hero4slider-Bttm1">
              <div className="Hero4slider-Bttm1UP">
                <h4 className="Herr4-HH">stylish travel bag</h4>
              </div>
              <div className="Hero4slider-Bttm1DWN">
                <p>$291.55</p>
                <p className="Herr4-PP">$325.99</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero4Slider;
