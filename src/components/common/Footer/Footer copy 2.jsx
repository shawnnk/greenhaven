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

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Newsletter form states
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

  const [activeSection, setActiveSection] = useState("");

  // Sections on homepage
  const sections = [
    "about",
    "plantBenefits",
    "featuredPlants",
    "blog",
    "aboutMe",
    "testimonials",
    "gallery",
    "faqs",
  ];

  // Scroll handler to detect active section
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for sticky header
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize active section on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for sticky header
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer footer-wrapper">
      {/* 🌿 Animated Vine Top Divider */}
      <div className="vine-divider"></div>

      <Container className="newsletter-container">
        <Row className="justify-content-center">
          <Col md={8}>
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

      <Container className="footer-main container-wrapper">
        <Row className="d-none d-md-flex">
          {/* Column 1 */}
          <Col md={4}>
            <h3 className="brand">Green Haven</h3>
            <p className="footer-description">
              Discover the joy of nurturing indoor plants and transform your
              space into a living sanctuary.
            </p>

            <ListGroup variant="flush" className="footer-contact">
              <ListGroup.Item>
                <FaPhoneVolume className="icon" />{" "}
                <a href="tel:+64073474659">+(64) (07) 347-4659</a>
              </ListGroup.Item>

              <ListGroup.Item>
                <MdEmail className="icon" />{" "}
                <a href="mailto:info@greenhaven.com">info@greenhaven.com</a>
              </ListGroup.Item>

              {/* <ListGroup.Item>
                <FaLocationDot className="icon" /> 21 Lake Road, Rotorua, NZ
                3040
              </ListGroup.Item> */}
            </ListGroup>

            <div className="footer-socials">
              <FaFacebook />
              <FaXTwitter />
            </div>
          </Col>

          {/* Column 2 */}
          <Col md={2}>
            <h5 className="footer-title">
              <BsHouseUpFill /> {isHomePage ? "Top Links" : "Explore"}
            </h5>

            <ListGroup variant="flush">
              {isHomePage ? (
                sections.map((id) => (
                  <ListGroup.Item key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                      className={activeSection === id ? "active-section" : ""}
                    >
                      {id
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </a>
                  </ListGroup.Item>
                ))
              ) : (
                <>
                  <ListGroup.Item>
                    <Link to="/blog">Plant Guides</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/blog#tips">Tips & Tricks</Link>
                  </ListGroup.Item>
                </>
              )}
            </ListGroup>
          </Col>

          {/* Column 3 */}
          <Col md={2}>
            <h5 className="footer-title">
              <FaLink /> Quick Links
            </h5>

            <ul className="footer-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Plants</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col md={2}>
            <h5 className="footer-title">
              {/* <FaScaleBalanced />  */}
              Legal Info
            </h5>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/privacy">Privacy Policy</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/terms">Terms & Conditions</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* 📱 Mobile Accordion Version */}
        <div className="d-md-none footer-mobile">
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Contact</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <FaPhoneVolume /> +(64) (07) 347-4659
                  </li>
                  <li>
                    <MdEmail /> info@greenhaven.com
                  </li>
                  <li>
                    <FaLocationDot /> Rotorua, NZ
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Links</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Plants</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Legal</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>

      <div className="footer-bottom">
        © 2024 Green Haven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
