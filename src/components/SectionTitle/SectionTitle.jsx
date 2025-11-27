import React from "react";
import { Row, Col } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ title, description }) => {
  return (
    <Row className="justify-content-center align-items-center text-center fade-in">
      <Col>
        <h2 className="display-4 section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </Col>
    </Row>
  );
};

export default SectionTitle;
