import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterQuickLinks = () => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      <Link to="/plants">Plants</Link>
    </ListGroup.Item>
    <ListGroup.Item>
      <Link to="/Blog">Blog</Link>
    </ListGroup.Item>
    <ListGroup.Item>
      <Link to="/faq">FAQ</Link>
    </ListGroup.Item>

  </ListGroup>
);

export default FooterQuickLinks;
