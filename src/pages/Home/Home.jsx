import React from "react";
import "./Home.css";

import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMeSection from "../../components/AboutMeSection/AboutMeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutMeSection />
    </>
  );
};

export default Home;
