import React from "react";
import "./home.css";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Hero2 from "../../Components/Hero-2/Hero2";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <Footer />
    </div>
  );
}
