import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const FooterTopLinks = ({ sections }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, sections]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <ListGroup variant="flush">
      {isHomePage ? (
        sections.map((id) => (
          <ListGroup.Item key={id}>
            <a
              className={
                activeSection === id
                  ? "active-section link-button"
                  : "link-button"
              }
              onClick={() => scrollToSection(id)}
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
  );
};

export default FooterTopLinks;
