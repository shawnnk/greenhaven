import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlantsData } from "../../data/PlantsData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import "./FeaturedPlantsSection.css";

const SECTION_CONFIG = {
  title: "Featured Air-Purifying Plants",
  description:
    "Discover our handpicked selection of the most effective air-purifying plants to enhance your indoor air quality and bring nature into your home.",
};

const FeaturedPlantsSection = ({ limit = 3 }) => {
  const preview = PlantsData.slice(0, limit);

  return (
    <section
      id="featuredPlants-section"
      className="FeaturedPlants-section section-wrapper"
    >
      {/* <img src={aboutLeftImage} className="left-plant" alt="" /> */}

      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.title}
          description={SECTION_CONFIG.description}
        />
        <Row className="fade-in delay-1s">
          {preview.map((plant) => (
            <Col key={plant.id} md={4} className="mb-3">
              <Card className="card h-100 ">
                <div className="card-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={plant.image}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{plant.name}</Card.Title>
                  <Card.Text>{plant.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link
                    to={`/plants/${plant.id}`}
                    className="btn btn-green btn-aboutme"
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
