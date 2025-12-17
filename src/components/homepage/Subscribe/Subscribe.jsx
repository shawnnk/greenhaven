import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
import "./Subscribe.css";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwlZRw_FAHM3n9goF7rJqMzSqNNiihu7HzTOu3KCMblk2avVFf_GdcOQzV-fod8fdtnNA/exec";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Subscribe = () => {
  const { title, subtitle, description } = SECTION_CONFIG.subscribe;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(null); // null = untouched, true = valid, false = invalid
  const [message, setMessage] = useState("");

  // Automatically clear success/error messages after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsValid(null);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateEmail = (value) => emailRegex.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setIsValid(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear input
    } catch (err) {
      setIsValid(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="subscribe"
      className="subscribe-section section-wrapper alt-bg"
    >
      <Container fluid className="container-wrapper">
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <div className="subscribe-content">
              <SectionTitle
                title={title}
                subtitle={subtitle}
                description={description}
              />
              <Form onSubmit={handleSubmit} className="subscribe-form">
                <Row className="m-0 g-0">
                  <Col md={9}>
                    <Form.Control
                      type="email"
                      value={email}
                      className="email-input"
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={isValid === false}
                      isValid={isValid === true}
                      placeholder="Enter your email"
                      autoComplete="off"
                      required
                    />
                  </Col>
                  <Col md={3}>
                    <Button
                      type="submit"
                      className="btn-subscribe btn-green "
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner animation="border" size="sm" />
                          {loading ? "Subscribing..." : "Subscribe"}
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
              {/* Feedback message under the form */}
              <p
                className={`feedback-message text-center mt-3 ${
                  isValid === true
                    ? "text-success fade-message"
                    : isValid === false
                    ? "text-danger fade-message"
                    : ""
                }`}
              >
                {message || "\u00A0"} {/* always keep the element */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
