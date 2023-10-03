import React from "react";
import "./hero3.css";
// import Hero3image2 from "";
import { FaGreaterThan } from "react-icons/fa";
// import NwArrvCrdImg from "../NWARRVCardImg/NwArrvCrd1.jpg";
import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";
const NewArrivalCardItem = [
  {
    id: 1,
    NwArrvCardImages:
      "https://th.bing.com/th/id/OIP.IRXdRj61rZj5aPsAykcFKQHaI2?w=182&h=218&c=7&r=0&o=5&pid=1.7",
    title: "Unique & Plain T-shirt",
    price: 19.99,
  },
  {
    id: 2,
    NwArrvCardImages:
      "https://th.bing.com/th?q=Denim+Shirts+for+Men&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247&thvar=defdefault",
    title: "Denims",
    price: 19.99,
  },
  {
    id: 3,
    NwArrvCardImages:
      "https://th.bing.com/th/id/OIP.9w2TNduRrMeSqeKWM9oCMAHaFj?w=206&h=154&c=7&r=0&o=5&pid=1.7",
    title: "Rayban Sunglass",
    price: 19.99,
  },
  {
    id: 4,
    NwArrvCardImages:
      "https://th.bing.com/th/id/OIP.6yinWKY6nadqn5AmeYiRSAHaHa?w=191&h=192&c=7&r=0&o=5&pid=1.7",
    title: "Jacob & Co.",
    price: 19.99,
  },
  {
    id: 5,
    NwArrvCardImages:
      "https://th.bing.com/th/id/OIP.w7uakMGa0a6zxl9DHjDx5wHaHc?w=180&h=181&c=7&r=0&o=5&pid=1.7",
    title: "Gold Plated Necklace",
    price: 19.99,
  },
  {
    id: 6,
    NwArrvCardImages:
      "https://th.bing.com/th/id/OIP.jFN82YKjJZpWOvouH5eD3QHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7",
    title: "Classic Levis Wallet",
    price: 19.99,
  },
];

export default function Hero3() {
  return (
    <>
      <section className="Heerro-3">
        <div className="Hero3">
          <div className="Hero3-Top">
            <div className="Hero3-TopLEFT">
              <img
                src="https://www.educationquizzes.com/library/New-5.png"
                alt=""
              />
              <h2>Explore Now!!!</h2>
            </div>
            <div className="Hero3-TopRYT">
              <h5>view all </h5>
              <FaGreaterThan />
            </div>
          </div>
          <div className="Hero3-Top2">
            {NewArrivalCardItem.map((item) => (
              <NewArrivalCard
                key={item.id}
                image={item.NwArrvCardImages}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
