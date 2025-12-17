import React from "react";
import { useNavigate } from "react-router-dom";
import MasonryGallery from "../common/MasonryGallery";
import PageHeader from "../ui/PageHeader/PageHeader";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";

const GalleryPreview = ({ items }) => {
  const navigate = useNavigate();
  const previewItems = items.slice(0, 3);

  return (
    <section className="section-wrapper">
      <div className="container">
        <PageHeader
          title={SECTION_CONFIG.gallery.title}
          subtitle={SECTION_CONFIG.gallery.subtitle}
          description={SECTION_CONFIG.gallery.description}
          showBack={false}
        />
        {/* <h2 className="section-title text-center mb-4">Gallery Inspiration</h2> */}
        <MasonryGallery items={previewItems} />
        <div className="text-center mt-4">
          <button
            className="btn btn-success"
            onClick={() => navigate("/gallery")}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
