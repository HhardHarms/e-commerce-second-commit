import React from "react";
import "./hero2.css";
import ItemsCard from "../Cards/ItemsCard";
export default function Hero2() {
  return (
    <>
      <section className="Heerro-2">
        <div className="Hero2">
          <div className="Hero2-Top">
            <h1>trending</h1>
          </div>
          <div className="Hero2-Bttm">
            <ItemsCard />
          </div>
        </div>
      </section>
    </>
  );
}
