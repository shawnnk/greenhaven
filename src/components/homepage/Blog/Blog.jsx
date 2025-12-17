import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { CategoriesData } from "../../../data/CategoriesData";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";
import "./Blog.css";

const Blog = ({ limit = 4 }) => {
  const preview = CategoriesData.slice(0, limit);
  const { title, subtitle, description } = SECTION_CONFIG.categories;

  return (
    <section id="blog" className="blog-section section-wrapper">
      {/* <img src={aboutLeftImage} className="left-plant" alt="" /> */}

      <Container className="container-wrapper">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          description={description}
        />
        <Row className="fade-in delay-1s g-4">
          {preview.map((post) => (
            <Col md={4} key={post.id}>
              <Card className="blog-card h-100">
                <Card.Img variant="top" src={post.image} alt={post.name} />
                <Card.Body>
                  <Card.Title>{post.name}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn btn-green w-100"
                  >
                    Read More
                  </Link>
                </Card.Body>
                {post.PostedOn && post.duration && (
                  <Card.Footer className="text-muted small d-flex justify-content-between">
                    <span>
                      <FaRegCalendarAlt /> {post.PostedOn}
                    </span>
                    <span>
                      <PiClockCountdownBold /> {post.duration} read
                    </span>
                  </Card.Footer>
                )}
              </Card>
            </Col>
          ))}
        </Row>
        {/* View All Posts Button */}
        <div className="text-center mt-5">
          <Link to="/blog" className="btn btn-green">
            View All Posts
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
