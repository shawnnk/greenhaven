import React from "react";
import { Row, Col } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle, description }) => {
  return (
    <Row className="justify-content-center align-items-center text-center fade-in">
      <Col>
        {subtitle && <h5 className="section-subtitle">{subtitle}</h5>}
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
      </Col>
    </Row>
  );
};

export default SectionTitle;
