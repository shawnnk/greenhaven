import React from "react";
import { Carousel, Container, Button, Row, Col } from "react-bootstrap";
import { HeroSectionData } from "../../../data/HeroSectionData";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container fluid className="p-0">
        <Carousel fade controls={false} indicators interval={5000}>
          {HeroSectionData.map((slide, index) => (
            <Carousel.Item key={index}>
              <section
                className="carousel-hero d-flex align-items-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  "--desktop-pos": slide.subjectDesktop,
                  "--mobile-pos": slide.subjectMobile,
                }}
              >
                <div className="overlay"></div>
                <Container>
                  <Row className="justify-content-start">
                    <Col xs={12} md={8}>
                      <div className="hero-content text-start">
                        <h1 className="display-3 fw-bold fade-in">
                          {slide.heading}
                        </h1>
                        <p className="lead mt-3 mb-4 fade-in delay-1s">
                          {slide.text}
                        </p>
                        <Button className="btn btn-hero  fade-in delay-2s">
                          {slide.btn}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <div className="mobile-wave">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path
                    fill="#2e9f18"
                    d="M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160V320H0Z"
                  />
                </svg>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Hero;
