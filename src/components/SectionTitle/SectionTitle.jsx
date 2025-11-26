import React from "react";
import { Row, Col } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <Row className="fade-in justify-content-center">
      <Col>
        <p className="section-subtitle">{subTitle}</p>
        <h2 className="display-4 section-title">{title}</h2>
      </Col>
    </Row>
  );
};

export default SectionTitle;
