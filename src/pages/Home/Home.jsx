import React from "react";
import "./Home.css";

import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
