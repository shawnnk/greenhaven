import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { plantBenefitsData } from "../../data/PlantsBenefitsData";
import "./PlantBenefitsSection.css";

const PlantBenefitsSection = () => {
  return (
    <section id="benefits-section" className="benefits-section section-wrapper">
      <Container className="container-wrapper">
        <SectionTitle
          title="Why Air-Purifying Plants?"
          description="Discover how air-purifying plants can enhance your home and
            well-being. From cleaner air to better sleep, these natural wonders
            offer countless benefits for a healthier, happier lifestyle."
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
