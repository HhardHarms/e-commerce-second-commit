import React from "react";
import "./hero2.css";
// import ItemsCard from "../Cards/ItemsCard";
import Img from "../CardImages/T-shirts/cardt-shirt1.jpeg";
import Img2 from "../CardImages/T-shirts/cardfemt-shirt.jpeg";
import Img3 from "../CardImages/T-shirts/cardt-shirt2.jpeg";
import Img4 from "../CardImages/T-shirts/cardfemt-shirt2.jpeg";
import C2Img from "../CardImages/Bags/cardfembag1.jpeg";
import C2Img2 from "../CardImages/Bags/cardmalebag1.jpeg";
import C2Img3 from "../CardImages/Bags/cardfembag2.jpeg";
import C2Img4 from "../CardImages/Bags/cardmalebag2.jpeg";
import C3Img from "../CardImages/Footwears/cardfemfoot2.jpeg";
import C3Img2 from "../CardImages/Footwears/cardmalefoot1.jpeg";
import C3Img3 from "../CardImages/Footwears/cardfemfoot3.jpeg";
import C3Img4 from "../CardImages/Footwears/cardmalefoot2.jpeg";
import C4Img from "../CardImages/Jackets/jacket5.jpeg";
import C4Img2 from "../CardImages/Jackets/jacket6.jpeg";
import C4Img3 from "../CardImages/Jackets/jacket3.jpeg";
import C4Img4 from "../CardImages/Jackets/jacket4.jpeg";
import C5Img from "../CardImages/Jewelries/cardfemjewel.jpeg";
import C5Img2 from "../CardImages/Jewelries/cardmalejewel.jpeg";
import C5Img3 from "../CardImages/Jewelries/cardfemjewel2.jpeg";
import C5Img4 from "../CardImages/Jewelries/cardmalejewel2.jpeg";
import C6Img from "../CardImages/Shirts/cardfemshirt1.jpeg";
import C6Img2 from "../CardImages/Shirts/cardshirt1.jpeg";
import C6Img3 from "../CardImages/Shirts/cardfemshirt2.jpeg";
import C6Img4 from "../CardImages/Shirts/cardshirt2.jpeg";
import C7Img from "../CardImages/Wristwatches/wristwatch6.jpeg";
import C7Img2 from "../CardImages/Wristwatches/wristwatch5.jpeg";
import C7Img3 from "../CardImages/Wristwatches/wristwatch3.jpeg";
import C7Img4 from "../CardImages/Wristwatches/wristwatch8.jpeg";
import C8Img from "../CardImages/Sunglasses/sunG5.jpeg";
import C8Img2 from "../CardImages/Sunglasses/sunG6.jpeg";
import C8Img3 from "../CardImages/Sunglasses/sunG3.jpeg";
import C8Img4 from "../CardImages/Sunglasses/sunG7.jpeg";
import C9Img from "../CardImages/WalletsAndPurse/cardfemwallet1.jpeg";
import C9Img2 from "../CardImages/WalletsAndPurse/cardmalewallet1.jpeg";
import C9Img3 from "../CardImages/WalletsAndPurse/cardfemwallet2.jpeg";
import C9Img4 from "../CardImages/WalletsAndPurse/cardmalewallet2.jpeg";
import C10Img from "../CardImages/HatsAndCaps/cardfemhat1.jpeg";
import C10Img2 from "../CardImages/HatsAndCaps/cardmalehat3.jpeg";
import C10Img3 from "../CardImages/HatsAndCaps/cardfemhat2.jpeg";
import C10Img4 from "../CardImages/HatsAndCaps/cardmalehat2.jpeg";
import { FaGreaterThan, FaShoppingCart } from "react-icons/fa";
import { BiSolidHot } from "react-icons/bi";
// import Slider from "./Slider";
import Hero2Slide from "./Slider";
import { GrStar } from "react-icons/gr";
import { LiaStar } from "react-icons/lia";
// import { FiRefreshCw } from "react-icons/fi";

const cardItem = [
  {
    id: 1,
    title: "Fine T-shirt",
    description: "A good t_shirt to buy",
    images: [Img, Img2, Img3, Img4],
    price: 19.99,
  },
  {
    id: 2,
    title: "Fine T-shirt 2",
    description: "A good t_shirt to buy",
    images: [C2Img, C2Img2, C2Img3, C2Img4],
    price: 24.99,
  },
  {
    id: 3,
    title: "Fine T-shirt 3",
    description: "A good t_shirt to buy 3",
    images: [C3Img, C3Img2, C3Img3, C3Img4],
    price: 29.99,
  },
  {
    id: 4,
    title: "Fine T-shirt 4",
    description: "A good t_shirt to buy 3",
    images: [C4Img, C4Img2, C4Img3, C4Img4],
    price: 22.99,
  },
  {
    id: 5,
    title: "Fine T-shirt 5",
    description: "A good t_shirt to buy 5",
    images: [C5Img, C5Img2, C5Img3, C5Img4],
    price: 27.99,
  },
  {
    id: 6,
    title: "Fine T-shirt 6",
    description: "A good t_shirt to buy 6",
    images: [C6Img, C6Img2, C6Img3, C6Img4],
    price: 19.99,
  },
  {
    id: 7,
    title: "Fine T-shirt 7",
    description: "A good t_shirt to buy 7",
    images: [C7Img, C7Img2, C7Img3, C7Img4],
    price: 34.99,
  },
  {
    id: 8,
    title: "Fine T-shirt 8",
    description: "A good t_shirt to buy 8",
    images: [C8Img, C8Img2, C8Img3, C8Img4],
    price: 18.99,
  },
  {
    id: 9,
    title: "Fine T-shirt 9",
    description: "A good t_shirt to buy 9",
    images: [C9Img, C9Img2, C9Img3, C9Img4],
    price: 21.99,
  },
  {
    id: 10,
    title: "Fine T-shirt 10",
    description: "A good t_shirt to buy 10",
    images: [C10Img, C10Img2, C10Img3, C10Img4],
    price: 25.99,
  },
];

export default function Hero2() {
  return (
    <>
      <section className="Heerro-2">
        <div className="Hero2">
          <div className="Hero2-Top">
            <div className="Hero2-TopLEFT">
              <BiSolidHot className="trendICCN" />
              <h2>Trending picks for you!!</h2>
            </div>
            <div className="Hero2-TopRYT">
              <h5>view all </h5>
              <FaGreaterThan />
            </div>
          </div>
          <div className="Hero2-Bttm">
            <div className="Hero2-BttmUp">
              {cardItem.map((item) => (
                <div className="itmCard " key={item.id}>
                  <section className="itmCard-top">
                    <div className="itmCard-top1">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="itmCard-top2">
                      <div className="itmCard-top2LFT">
                        <p>${item.price}</p>
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
                    <Hero2Slide images={item.images} />
                  </section>
                  <section className="itmCard-bttm">
                    <div className="itmCard-bttmUP">
                      <p>{item.description}</p>
                    </div>
                    <div className="itmCard-bttmDWN">
                      <button className="DWN-icn1">
                        <FaShoppingCart /> add to cart
                      </button>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
