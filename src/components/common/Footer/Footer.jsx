import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import {
  FaLink,
  FaScaleBalanced,
  FaCompass,
  FaPhoneVolume,
  FaLocationDot,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsHouseUpFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
// Logo SVG
// import Logo from "/images/logo.png";
import "./Footer.css";
import FooterNewsletter from "./FooterNewsletter";
import FooterContact from "./FooterContact";
import FooterTopLinks from "./FooterColumnTopLinks";
import FooterQuickLinks from "./FooterColumnQuickLinks";
import FooterLegal from "./FooterColumnLegal";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const sections = [
    "about",
    "plantBenefits",
    "featuredPlants",
    // "blog",
    "aboutMe",
    "testimonials",
    "gallery",
    // "faqs",
  ];
  return (
    <footer id="footer" className="footer-section footer-wrapper">
      {/* 🌿 Animated Vine Top Divider */}
      {/* <div className="vine-divider"></div> */}
      <FooterNewsletter />
      <Container className="container-wrapper">
        <Row className="footer-content justify-content-center g-4">
          <Col md={4} className="col">
            <h3 className="brand"> Green Haven</h3>
            <p className="footer-description">
              Discover the joy of nurturing indoor plants and transform your
              space into a living sanctuary.
            </p>
            <FooterContact />
          </Col>
          <Col md={3} className="col">
            <h5 className="footer-title">
              {/* <BsHouseUpFill />  */}
              Top Links
            </h5>
            <FooterTopLinks sections={sections} />
          </Col>
          <Col md={2} className="col">
            <h5 className="footer-title">
              {/* <FaLink />  */}
              {/* Quick Links */}
              {/* Help &  */}
              Resources
            </h5>
            <FooterQuickLinks />
          </Col>
          <Col md={3} className="col">
            <h5 className="footer-title">Legal & Contact</h5>
            <FooterLegal />
          </Col>
        </Row>
      </Container>
      <hr className="text-muted" />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
