import React from "react";
import "./home.css";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Hero2 from "../../Components/Hero-2/Hero2";
import Footer from "../../Components/Footer/Footer";
import Hero3 from "../../Components/Hero-3/Hero3";
import Hero4 from "../../Components/Hero-4/Hero4";
import Hero5 from "../../Components/Hero-5/Hero5";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  );
}
