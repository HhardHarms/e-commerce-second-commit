import React from "react";
import "./hero4.css";
import { BsGift } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import Hero4Slider from "../Hero4Slider/Hero4Slider";

export default function Hero4() {
  return (
    <>
      <section className="Heerro-4">
        <div className="Hero4">
          <div className="Hero4-Top">
            <div className="Hero4-TopLEFT">
              <BsGift className="trendICCN" />
              <h2>Amazing Discounts!!!</h2>
            </div>
            <div className="Hero4-TopRYT">
              <h5>view all </h5>
              <FaGreaterThan />
            </div>
          </div>
          <div className="Hero4-Bottom">
            <Hero4Slider />
          </div>
        </div>
      </section>
    </>
  );
}
