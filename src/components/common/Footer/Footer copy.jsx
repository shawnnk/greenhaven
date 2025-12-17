import React from "react";

import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  InputGroup,
  Button,
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
import { MdOutlineContactMail, MdEmail } from "react-icons/md";
import { BsHouseUpFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { PiMailboxDuotone } from "react-icons/pi";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // const { title, subtitle, description } = SECTION_CONFIG.newsLetter;

  return (
    <footer className="footer-section">
      <Container className="container-wrapper">
        {/* <Row className="newsletter-card">
          <Col>
            <h5 className="section-subtitle">{subtitle}</h5>
            <h2>{title}</h2>
            <p>{description}</p>
            <Form className="newsletter-form mt-2">
              <Row className="g-2 justify-content-center">
                <Col xs={12} md={7}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                </Col>
                <Col xs={12} md="auto">
                  <Button className="btn btn-green">Subscribe</Button>
                </Col>
              </Row>
            </Form>
          
          </Col>
        </Row> */}
        <Row
          xs={1}
          sm={2}
          md={4}
          className="footer-content gy-4 gx-sm-0 justify-content-between"
        >
          <Col md={4} className="col">
            <h3>Green Haven</h3>
            <p className="footer-description">
              Discover the joy of nurturing indoor plants and transform spaces
              into living sanctuaries.
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FaPhoneVolume className="icon me-2" />
                <a href="tel:+64073474659"> +(64) (07) 347-4659</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <MdEmail className="icon me-2" />
                <a href="mailto:info@greenhaven.com">info@greenhaven.com</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <FaLocationDot className="icon me-2" />
                21 Lake Road,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rotorua, NZ 3040
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2} className="col">
            {isHomePage ? (
              <>
                <h5 className="col-headings">
                  <span className="fa-icon">
                    <BsHouseUpFill />
                  </span>
                  Top Links
                </h5>
                <ListGroup variant="flush" className="ms-2">
                  <ListGroup.Item>
                    <a href="#aboutme">About Me</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="#about">About</a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a href="#blog">Blog</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="#testimonials">Testimonials</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="#gallery">Gallery</a>
                  </ListGroup.Item>
                </ListGroup>
              </>
            ) : (
              <>
                <h5 className="col-headings">
                  <span className="fa-icon">
                    <FaCompass />
                  </span>
                  Explore
                </h5>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <a href="#">Plant Guides</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="#">Tips & Tricks</a>
                  </ListGroup.Item>
                </ListGroup>
              </>
            )}
          </Col>
          <Col md={2} className="col-headings">
            <h5>
              <span className="fa-icon">
                <FaLink />
              </span>
              Quick Links
            </h5>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a href="#">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#">Plants</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#">Contact</a>
              </ListGroup.Item>

              <ListGroup.Item className="d-block d-sm-none">
                <a href="#">Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item className="d-block d-sm-none">
                <a href="#">Terms & Conditions</a>
              </ListGroup.Item>

              <ListGroup.Item>
                <a href="#">FAQ</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={2} className="col-headings">
            <h5>
              <span className="fa-icon">
                <FaScaleBalanced />
              </span>
              Legal Info
            </h5>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a href="#">Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#">Terms & Conditions</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0">
        <hr />
        <div className="text-center pb-3">
          &copy; 2024 Green Haven. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
