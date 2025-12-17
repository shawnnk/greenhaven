import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../ui/PageHeader/PageHeader";
import MasonryGallery from "../common/MasonryGallery";
import GalleryFilter from "./GalleryFilter";
import { GalleryData } from "../../data/GalleryData";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(GalleryData.map((item) => item.category)),
  ];
  const filteredItems =
    activeFilter === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === activeFilter);

  return (
    <section className="section-wrapper">
      <Container>
        {/* <h2 className="section-title text-center mb-4">
          Full Inspiration Gallery
        </h2> */}
        <PageHeader
          title="Full Inspiration Gallery"
          subtitle="Explore curated indoor plant setups"
          description="Click on any image to view in full size."
        />
        <GalleryFilter
          categories={categories}
          active={activeFilter}
          onSelect={setActiveFilter}
        />
        <MasonryGallery items={filteredItems} />
        {/* {filteredItems.length > 0 ? (
          <MasonryGallery items={filteredItems} />
        ) : (
          <p className="text-center">No images found in this category.</p>
        )} */}
      </Container>
    </section>
  );
};

export default GalleryPage;
