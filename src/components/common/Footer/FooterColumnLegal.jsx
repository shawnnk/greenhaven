import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterLegal = () => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      <Link to="/privacy">Privacy Policy</Link>
    </ListGroup.Item>
    <ListGroup.Item>
      <Link to="/terms">Terms & Conditions</Link>
    </ListGroup.Item>
    <ListGroup.Item>
      <Link to="/Contact">Contact</Link>
    </ListGroup.Item>
  </ListGroup>
);

export default FooterLegal;
