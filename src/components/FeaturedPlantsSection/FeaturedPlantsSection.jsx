import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";
import { FeaturedPlantsData } from "../../data/FeaturedPlantsData";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./FeaturedPlantsSection.css";

const FeaturedPlantsSection = ({ limit = 3 }) => {
  const preview = FeaturedPlantsData.slice(0, limit);

  return (
    <section
      id="featuredPlants-section"
      className="featuredPlants-section section-wrapper"
    >
      {/* <img src={aboutLeftImage} className="left-plant" alt="" /> */}

      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.featuredPlants.title}
          description={SECTION_CONFIG.featuredPlants.description}
        />
        <Row className="fade-in delay-1s">
          {preview.map((plant) => (
            <Col key={plant.id} md={4} className="mb-3">
              <Card className="h-100 card">
                <div className="card-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={plant.image}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{plant.title}</Card.Title>
                  <Card.Subtitle className="text-center mb-2 text-muted">
                    {plant.subtitle}
                  </Card.Subtitle>
                  <Card.Text>{plant.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link
                    to={`/plants/${plant.id}`}
                    className="btn btn-green btn-card"
                  >
                    View Details
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Link to="/plants" className="btn btn-green btn-outline-green">
            View All Plants
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPlantsSection;
