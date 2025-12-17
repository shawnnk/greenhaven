import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import "./Subscribe.css";


const Subscribe = () => {
  const { title, subtitle, description } = SECTION_CONFIG.subscribe;

  const [formData, setFormData] = useState({
       email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use Formspree
    fetch("https://formspree.io/f/xdkqzjlk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Thank you for subscribing.");
        setFormData({ email: "" });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your form. Please try again.");
      });
  };

  return (
    <>
      <section id="subscribe" className="subscribe-section section-wrapper">
        <Container fluid className="container-wrapper">
          <Row className="subscribe-card justify-content-center">
            <Col md={7}>
              <SectionTitle
                title={title}
                subtitle={subtitle}
                description={description}
              />

              {/* <Form className="subscribe-form">
                <Row className="g-2 justify-content-center">
                  <Col xs={12} md={7}>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="newsletter-input"
                    />
                  </Col>
                  <Col xs={12} md="auto">
                    <Button className="btn btn-green btn-subscribe">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form> */}

              <Form className="subscribe-form" onSubmit={handleSubmit}>
                <Form.Group className="form-input-group d-flex flex-column flex-sm-row">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="false"
                    className="email"
                    placeholder="Enter your email"
                    required
                  />

                  <Button type="submit" className="subscribe-btn btn-green">
                    Subscribe
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Subscribe;
