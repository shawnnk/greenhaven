import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import aboutmeImage from "/images/aboutme.jpg";
import "./AboutMeSection.css";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutMeSection = () => {
  return (
    <section id="aboutme" className="aboutme-section section-wrapper">
      <Container className="container-wrapper">
        <SectionTitle title="My Green Journey" subTitle="About Me" />
        <Row className="aboutme-content justify-content-center align-items-center fade-in delay-1s">
          <Col>
            <p>
              Since 2019, my passion for indoor plants has blossomed into a
              mission to improve my family's well-being. Inspired by{" "}
              <span>
                NASA's research on the air-purifying capabilities of plants{" "}
              </span>
              <Link
                to="https://en.wikipedia.org/wiki/NASA_Clean_Air_Study#List_of_plants_studied"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme-badge"
              >
                <sup>
                  <Badge>1</Badge>
                </sup>
              </Link>
              , I discovered that adding greenery to our home made a noticeable
              difference in creating a more vibrant and healthy living space.
            </p>

            <img
              src={aboutmeImage}
              alt="About Me"
              className="aboutme-image fade-in delay-1s"
            />

            <p>
              I began by introducing a variety of houseplants, each chosen for
              their ability to remove toxins and enhance our living environment.
              From snake plants to peace lilies, every plant not only adds
              beauty but also helps purify the air we breathe, with leaves,
              roots, soil, and associated microorganisms working together as
              nature's life-support system{" "}
              <Link
                to="https://nasa.fandom.com/wiki/NASA_Clean_Air_Study"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme-badge"
              >
                <sup>
                  <Badge>2</Badge>
                </sup>
              </Link>
              .
            </p>

            <p>
              Today, our home feels like a natural sanctuary — a place where my
              family can thrive. I'm excited to share this journey and invite
              you to discover the powerful benefits of indoor gardening.
            </p>

            <Link
              to="https://en.wikipedia.org/wiki/NASA_Clean_Air_Study#List_of_plants_studied"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green btn-aboutme"
            >
              {/* Start Growing */}
              Start Your Green Journey Today
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMeSection;
