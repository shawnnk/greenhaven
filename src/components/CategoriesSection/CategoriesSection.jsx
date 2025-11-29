import React from "react";
import { Container, Row, Col, Card,Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SECTION_CONFIG } from "../../data/config/SectionConfig";
import SectionTitle from "../SectionTitle/SectionTitle";
import { CategoriesData } from "../../data/CategoriesData";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";
import "./CategoriesSection.css";


const CategoriesSection = ({ limit = 4 }) => {
  const preview = CategoriesData.slice(0, limit);

  return (
    <section
      id="categories-section"
      className="categories-section section-wrapper"
    >
      {/* <img src={aboutLeftImage} className="left-plant" alt="" /> */}

      <Container className="container-wrapper">
        <SectionTitle
          title={SECTION_CONFIG.categories.title}
          description={SECTION_CONFIG.categories.description}
        />
        <Row className="fade-in delay-1s">
          {preview.map((category) => (
            <Col md={4} key={category.id}>
              <Card
                as={Link}
                to={`/plants?category=${category.slug}`}
                className="h-100 card category-card11"
              >
                <div className="card-image-wrapper">
                  <Card.Img
                    src={category.image}
                    alt={category.title}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <div className="blog-meta d-flex justify-content-between text-muted small mb-2">
                    <span>
                      <FaRegCalendarAlt className="me-1" />
                      {category.PostedOn}
                    </span>
                    <span>
                      <PiClockCountdownBold className="me-1" />
                      {category.duration}
                    </span>
                  </div>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text className="category-description">
                    {category.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    // to={`/plants}`}
                    className="btn btn-green btn-card"
                  >
                    View Details
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategoriesSection;
