import React from "react";
import "./Home.css";

import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMeSection from "../../components/AboutMeSection/AboutMeSection";
import PlantBenefitsSection from "../../components/PlantBenefitsSection/PlantBenefitsSection";
import FeaturedPlantsSection from "../../components/FeaturedPlantsSection/FeaturedPlantsSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import FaqSection from "../../components/FaqSection/FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PlantBenefitsSection />
      <FeaturedPlantsSection />
      <CategoriesSection />
      <AboutMeSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
    </>
  );
};

export default Home;
