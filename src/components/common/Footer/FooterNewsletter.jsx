import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMsg("");
    if (!email.includes("@")) {
      setIsValid(false);
      setMsg("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_NEWSLETTER_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setIsValid(true);
      setMsg("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setIsValid(false);
      setMsg("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="newsletter-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="newsletter-card">
            <h4>Join Our Green Community</h4>
            <p>Get plant tips, care guides, and updates.</p>

            <Form onSubmit={handleSubscribe} className="d-flex mt-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Button className="btn-green" type="submit" disabled={loading}>
                {loading ? "..." : "Subscribe"}
              </Button>
            </Form>

            <p
              className={`newsletter-msg ${
                isValid ? "msg-success" : "msg-error"
              }`}
            >
              {msg || "\u00A0"}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterNewsletter;
