import React from "react";
import "./Home.css";
import HeroSection from "../../components/homepage/Hero/Hero";
import AboutSection from "../../components/homepage/About/About";
import PlantBenefitsSection from "../../components/homepage/PlantBenefits/PlantBenefits";
import FeaturedPlantsSection from "../../components/homepage/FeaturedPlants/FeaturedPlants";
import CategoriesSection from "../../components/homepage/Categories/Categories";
import AboutMeSection from "../../components/homepage/AboutMe/AboutMe";
import TestimonialsSection from "../../components/homepage/Testimonials/Testimonials";
import GallerySection from "../../components/homepage/Gallery/Gallery";
import FaqSection from "../../components/homepage/Faq/Faq";

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
