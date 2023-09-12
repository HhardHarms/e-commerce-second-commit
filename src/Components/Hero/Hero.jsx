import React from "react";
import "./hero.css";
import Categories from "../HeroCategories/Categories";
import SlickSlider from "../Slider/SlickSlider";
import { BiCategory } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import HeroBttmSlider from "../HeroBttmSlider/HeroBttmSlider";
// import ItemsCard from "../Cards/ItemsCard";

export default function Hero() {
  return (
    <>
      <section className="heerro">
        <div className="newSTYLE">
          <Categories />
        </div>
        <div className="herro-RIGHT">
          <div className="newSTYLE-RIGHT">
            <SlickSlider />
          </div>
          <div className="herro-RIGHTbttm">
            <div className="herro-RIGHTbttmTop">
              <div className="herro-RIGHTbttmTop-LFT">
                <BiCategory className="ic-on" />
                <h1>top categories</h1>
              </div>
              <div className="herro-RIGHTbttmTop-RYT">
                <h3>view all</h3>
                <FaGreaterThan />
              </div>
            </div>
            <div className="herro-RIGHTbttmSlide">
              <HeroBttmSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
