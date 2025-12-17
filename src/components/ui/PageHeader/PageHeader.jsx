// components/ui/PageHeader.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PageHeader.css"; // optional custom styles

const PageHeader = ({ title, subtitle, description, showBack = true }) => {
  const navigate = useNavigate();

  return (
    <Container className="page-header text-center my-4">
      {showBack && (
        <Button
          variant="outline-secondary"
          className="mb-3"
          onClick={() => navigate("/")}
        >
          &larr; Back to Home
        </Button>
      )}
      {title && <h1 className="page-title">{title}</h1>}
      {subtitle && <h5 className="page-subtitle text-muted">{subtitle}</h5>}
      {description && <p className="page-description">{description}</p>}
    </Container>
  );
};

export default PageHeader;
