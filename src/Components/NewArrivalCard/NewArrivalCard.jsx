import React from "react";
import "./newarrivalcard.css";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function NewArrivalCard({ title, image, price }) {
  return (
    <div className="NwArrvCard">
      <div className="NwArrvCard1">
        <div className="NwArrvCard-Top">
          <img src={image} alt="" />
        </div>
        <div className="NwArrvCard-Bttm">
          <h4>{title}</h4>
          <div className="NwArrvCard-Bttm-2">
            <p>${price}</p>
            <BsFillCartPlusFill className="cartplus" />
          </div>
        </div>
      </div>
    </div>
  );
}
