import React from "react";
import "./Home.css";

import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMeSection from "../../components/AboutMeSection/AboutMeSection";
import PlantBenefitsSection from "../../components/PlantBenefitsSection/PlantBenefitsSection";
import FeaturedPlantsSection from "../../components/FeaturedPlantsSection/FeaturedPlantsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PlantBenefitsSection />
      <FeaturedPlantsSection />
      <AboutMeSection />
    </>
  );
};

export default Home;
