import React from "react";
import "./itemsCard.css";
import { MdStarOutline } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidHeartSquare } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

export default function itemsCard() {
  return (
    <div className="itmCard">
      <section className="itmCard-top">
        <div className="itmCard-top1">
          <h3>Fusce elementum</h3>
        </div>
        <div className="itmCard-top2">
          <div className="itmCard-top2LFT">
            <p>$250.00</p>
          </div>
          <div className="itmCard-top2RYT">
            <MdStarOutline className="itmCard-top2RYT-icn" />
            <MdStarOutline className="itmCard-top2RYT-icn" />
            <MdStarOutline className="itmCard-top2RYT-icn" />
            <MdStarOutline className="itmCard-top2RYT-icn" />
            <MdStarOutline className="itmCard-top2RYT-icn" />
          </div>
        </div>
      </section>
      <section className="itmCard-mid"></section>
      <section className="itmCard-bttm">
        <div className="itmCard-bttmUP">
          <p>Lorem ipsum dolor sit amet elit consectetur adipisicing.</p>
        </div>
        <div className="itmCard-bttmDWN">
          <button className="DWN-icn1">
            <FaShoppingCart /> add to cart
          </button>
          <BiSolidHeartSquare className="DWN-icn2" />
          <FiRefreshCw className="DWN-icn2" />
        </div>
      </section>
    </div>
  );
}
