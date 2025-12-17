import React from "react";
import Slider from "react-slick";
import { Card, Container, Row } from "react-bootstrap";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { GalleryData } from "../../../data/GalleryData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    // variableWidth: true,
    // centerMode: true,
    // centerPadding: "60px",
    // slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, initialSlide: 0 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 },
      },
    ],
  };

  return (
    <section id="gallery" className="gallery-section section-wrapper alt-bg">
      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.gallery.title}
          subtitle={SECTION_CONFIG.gallery.subtitle}
          description={SECTION_CONFIG.gallery.description}
        />

        <div className="container fade-in delay-1s">
          <Slider {...settings}>
            {GalleryData.map((item, index) => (
              <Card key={index} className="img-body m-0 p-0">
                <Card.Img
                  src={item.image}
                  alt={item.description}
                  className="gallery-image img-fluid rounded"
                />
              </Card>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
