import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Object from "./MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className={Object.Navbar}>
    <Container>
      <Navbar.Brand Link="home" className={Object.logo}>Cost Calculator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={Object.Nav}>
        <Nav >
          <Nav.Link className={Object.link}>
            Home
          </Nav.Link>
          <Nav.Link className={Object.link}>
            About
          </Nav.Link>
          <Nav.Link className={Object.link} >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default MyNavbar;
