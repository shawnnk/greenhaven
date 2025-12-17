import React from "react";
import "./Home.css";
import Hero from "../../components/homepage/Hero/Hero";
import About from "../../components/homepage/About/About";
// import HeroSection from "../../components/homepage/Hero/Hero";
// import AboutSection from "../../components/homepage/About/About";
import PlantBenefits from "../../components/homepage/PlantBenefits/PlantBenefits";
import FeaturedPlants from "../../components/homepage/FeaturedPlants/FeaturedPlants";
import Categories from "../../components/homepage/Categories/Categories";
import Blog from "../../components/homepage/Blog/Blog";
import AboutMe from "../../components/homepage/AboutMe/AboutMe";
import Testimonials from "../../components/homepage/Testimonials/Testimonials";
import Gallery from "../../components/homepage/Gallery/Gallery";
import Faq from "../../components/homepage/Faq/Faq";
import Subscribe from "../../components/homepage/Subscribe/Subscribe";
import { GalleryData } from "../../data/GalleryData";
import GalleryPreview from "../../components/Gallery/GalleryPreview";

const Home = () => {
  return (
    <>
      {/* <Hero />
      <About />
      <PlantBenefits />
      <FeaturedPlants />
      <Blog />
      <AboutMe />
      <Testimonials /> */}
      {/* <Gallery /> */}
      <GalleryPreview items={GalleryData} />
      <Faq />
    </>
  );
};

export default Home;
