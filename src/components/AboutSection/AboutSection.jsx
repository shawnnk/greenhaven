import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import aboutImage from "/images/about.png";
import aboutLeftImage from "/images/about-bg.png";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section section-wrapper">
      <img src={aboutLeftImage} className="left-plant" alt="" />

      <Container className="container-wrapper">
        <SectionTitle title="Why Indoor Plants?" subTitle="About" />
        <Row className="about-content justify-content-center align-items-center">
          <Col>
            {/* <h2 className="display-4 section-title fade-in">
              Why Indoor Plants?
            </h2> */}

            <p>
              Indoor plants do more than decorate — they help clean the air,
              boost your mood, and bring life into your living space. Studies
              have shown that some plants can reduce toxins and create a calmer,
              healthier atmosphere.
            </p>

            <p>
              In 1980s, <span className="fw-bold">NASA</span> looked into
              natural ways to clean the air in places like space stations. Their
              research found that houseplants can help remove harmful chemicals
              like:
            </p>

            <img
              src={aboutImage}
              alt="Monstera plant on a table in a cozy living room"
              className="about-image shadow-lg"
            />

            <ul className="toxin-card">
              <li>
                <strong>Formaldehyde</strong> - from furniture, carpets, and
                cleaners
              </li>
              <li>
                <strong>Benzene</strong> – found in plastics, paint, and tobacco
                smoke
              </li>
              <li>
                <strong>Trichloroethylene</strong> – in correction fluid, paint,
                and carpet cleaners
              </li>
              <li>
                <strong>Toluene</strong> – in nail polish, paint, and gasoline
              </li>
              <li>
                <strong>Xylene</strong> - from paints, varnishes, and garage
                stuff
              </li>
              <li>
                <strong>Ammonia</strong> - in household cleaners, window sprays
                and fertilizers
              </li>
              <li>
                <strong>Other stuff</strong> - like cooking fumes, perfumes, and
                aerosols
              </li>
            </ul>

            <p>
              Everyday items like{" "}
              <strong className="fw-bold fst-italic">
                nail polish, synthetic fabrics, and air fresheners{" "}
              </strong>
              can emit harmful volatile organic compounds (VOCs).
            </p>

            <p>
              Incorporating air-purifying plants can naturally reduce these
              pollutants, contributing to a more relaxing and healthier
              environment.
            </p>

            <Link
              to="https://en.wikipedia.org/wiki/NASA_Clean_Air_Study#List_of_plants_studied"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green btn-about"
            >
              Explore NASA’s Clean Air study
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
