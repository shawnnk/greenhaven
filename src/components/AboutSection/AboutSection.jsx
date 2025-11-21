import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImage from "/images/about.png";
import aboutLeftImage from "/images/about-bg.png";
import "./AboutSection.css";

export default function AboutSection() {

  return (
    <section id="about-section" className="about-section section-wrapper">
      <img src={aboutLeftImage} className="left-plant" alt="" />

      <Container className="container-wrapper">
        <Row className="about-content justify-content-center align-items-center">
          <Col>
            <h2 className="display-6 section-title text-center fade-in">
              Why Indoor Plants?
            </h2>

            <p>
              Indoor plants offer more than beauty — they help purify the air,
              reduce toxins, ease stress, enhance mood, and bring calm, balance,
              and freshness to your home.
            </p>
          </Col>
        </Row>


        <Row className="pt-3 d-flex align-items-stretch">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img src={aboutImage} className="img-fluid about-image" />
          </Col>
          <Col md={7}>
            <h4 className="">🛰️ NASA Clean Air Study</h4>
            <p>
              In the 1980s,
              <span className="fw-bold">NASA</span> conducted a groundbreaking
              study to find natural ways to purify air in enclosed environments
              like space stations.{" "}
            </p>
            <p>
              According to{" "}
              <span className="fw-bold">NASA’s Clean Air findings</span>,
              houseplants can remove harmful toxins such as{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A common indoor air pollutant found in furniture, cleaners,
                    carpets.
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Formaldehyde</span>
                </span>
              </OverlayTrigger>
              ,{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A volatile organic compound found in plastics and tobacco
                    smoke, paints, glues, detergents, markers, candles.
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Benzene</span>
                </span>
              </OverlayTrigger>
              ,{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A synthetic solvent found in correction fluids, paint, spot
                    removers, carpet cleaners, and metal degreasers.
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Trichloroethylene</span>
                </span>
              </OverlayTrigger>
              ,{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A solvent found in paints, glues, nail polish, tobacco
                    smoke, and gasoline exhaust.
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Toluene</span>
                </span>
              </OverlayTrigger>
              ,{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A flammable liquid found in paints, varnishes, lacquers,
                    glues, stains, and items stored in garages like gasoline.
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Xylene</span>
                </span>
              </OverlayTrigger>
              ,{" "}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    A pungent gas found in household cleaners, window sprays,
                    floor waxes, smelling salts, and fertilizers etc
                  </Tooltip>
                }
              >
                <span className="fw-bold" style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">Ammonia</span>
                </span>
              </OverlayTrigger>{" "}
              and{" "}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>cooking fumes, perfumes, aerosols</Tooltip>}
              >
                <span style={{ cursor: "pointer" }}>
                  <sup>⚠️</sup>
                  <span className="toxin fw-bold">other pollutants</span>.
                </span>
              </OverlayTrigger>
            </p>
            <p>
              Everyday items like{" "}
              <span className="fw-bold">
                nail polish, synthetic fabrics, and air fresheners{" "}
              </span>
              can emit volatile organic compounds (VOCs).
            </p>
            <p>
              Incorporating a few
              <span className="fw-bold"> easy-to-care-for</span> plants is a
              simple and effective strategy to promote cleaner, fresher indoor
              air.
            </p>
            <Link
              to="https://en.wikipedia.org/wiki/NASA_Clean_Air_Study#List_of_plants_studied"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Explore NASA’s Clean Air Plant List
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
