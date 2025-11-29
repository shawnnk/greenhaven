import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";
import SectionTitle from "../SectionTitle/SectionTitle";
import { GalleryData } from "../../data/GalleryData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GallerySection.css";

const GallerySection = () => {
  const settings = {
    dots: true, // Show dots below slider
    infinite: true, // Loop back to start
    speed: 500, // Animation speed (ms)
    slidesToShow: 3, // Show 3 cards on desktop
    slidesToScroll: 1, // Scroll one card at a time
    arrows: true,
    autoplay: true, // this is the new line
    autoplaySpeed: 2000,
    touchThreshold: 1000,
    responsive: [
      {
        breakpoint: 992, // Below 992px (tablet)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Below 576px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery-section" className="gallery-section section-wrapper">
      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.gallery.title}
          subtitle={SECTION_CONFIG.gallery.subtitle}
          description={SECTION_CONFIG.gallery.description}
        />
        <Row className="fade-in delay-1s">
          <Slider {...settings}>
            {GalleryData.map((item, index) => (
              <Col md={4}>
                <Figure key={index} className="gallery-container">
                  <Figure.Image
                    src={item.image}
                    alt={item.description}
                    className="gallery-image rounded"
                  />
                  <Figure.Caption>{item.description}</Figure.Caption>
                </Figure>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default GallerySection;
