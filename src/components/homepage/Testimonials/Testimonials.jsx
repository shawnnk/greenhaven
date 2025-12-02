import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import { TestimonialsData } from "../../../data/TestimonialsData";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section
      id="testimonials-section"
      className="testimonials-section section-wrapper alt-bg"
    >
      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.testimonials.title}
          subtitle={SECTION_CONFIG.testimonials.subtitle}
          description={SECTION_CONFIG.testimonials.description}
        />
        <Row className="fade-in delay-1s">
          {TestimonialsData.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="mb-3">
              <Card className="h-100 card">
                <Card.Body>
                  <Card.Text>
                    <RiDoubleQuotesL className="quotes" />
                    {testimonial.testimonial}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col sm={4} className="d-flex align-items-center">
                      <div className="testimonials-image-wrapper text-center rounded-circle overflow-hidden shadow-md">
                        <Image
                          src={testimonial.image}
                          className="img-fluid testimonial-image"
                          alt={testimonial.image}
                        />
                      </div>
                    </Col>
                    <Col sm={7} className="d-flex align-items-center">
                      <div className="testimonial-info">
                        <cite className="testimonial-title">
                          {testimonial.name}
                        </cite>
                        <small>{testimonial.location}</small>
                      </div>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
