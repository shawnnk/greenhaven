import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";
import { faqData } from "../../data/FaqData";
import "./FaqSection.css";

const FaqSection = () => {
  return (
    <section
      id="featuredPlants-section"
      className="featuredPlants-section section-wrapper"
    >
      {/* <img src={aboutLeftImage} className="left-plant" alt="" /> */}

      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.faqs.title}
          subtitle={SECTION_CONFIG.faqs.subtitle}
          description={SECTION_CONFIG.faqs.description}
        />
        <Row className="justify-content-center fade-in delay-1s">
          {faqData.map((faq) => (
            <Col key={faq.id} md={8} className="mb-3">
              <Accordion>
                <Accordion.Item eventKey={faq.id - 1}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Collapse eventKey={faq.id - 1}>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Collapse>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;
