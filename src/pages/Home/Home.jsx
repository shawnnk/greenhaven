import React from "react";
import "./Home.css";

import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMeSection from "../../components/AboutMeSection/AboutMeSection";
import PlantBenefitsSection from "../../components/PlantBenefitsSection/PlantBenefitsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PlantBenefitsSection />
      <AboutMeSection />
    </>
  );
};

export default Home;
