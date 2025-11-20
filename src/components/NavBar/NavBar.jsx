import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setIsOpen(false);
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      expanded={expanded}
      className="navbar pt-3 pb-2 shadow-sm"
      sticky="top"
    >
      <Container className="header-container">
        <Link to="/" className="navbar-brand">
          <img
            alt="eco-friendly house with leaves"
            src={logo}
            // width="60"
            // height="40"
            className="logo d-inline-block align-top"
          />
          Plant Haven
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        >
          <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
            <span className="bar bar-one"></span>
            <span className="bar bar-two"></span>
            <span className="bar bar-three"></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
          <Nav className={`ms-md-auto gap-md-4`} onClick={handleClose}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
