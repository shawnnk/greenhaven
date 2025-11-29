import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";
import { plantBenefitsData } from "../../data/PlantBenefitsData";
import "./PlantBenefitsSection.css";

const PlantBenefitsSection = () => {
  return (
    <section id="benefits-section" className="benefits-section section-wrapper">
      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.plantBenefits.title}
          subtitle={SECTION_CONFIG.plantBenefits.subtitle}
          description={SECTION_CONFIG.plantBenefits.description}
        />
        <Row className="g-4">
          {plantBenefitsData.map((benefit) => (
            <Col md={4} key={benefit.id}>
              <Card className="h-100 benefits-card text-center fade-in">
                <Card.Body>
                  <div
                    className="benefit-icon"
                    // style={{ fontSize: "3rem" }}
                  >
                    {benefit.icon}
                  </div>
                  <Card.Title> {benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlantBenefitsSection;
