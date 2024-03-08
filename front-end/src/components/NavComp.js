import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navcomp.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="home" className="text-light">
          <img
            src="logo3.png"
            alt="Logo"
            width="55"
            height="30"
            className="d-inline-block align-text-top "
          />
          Eventopia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ marginLeft: '20px' }}>
          <Nav className="me-auto">
            <Nav.Link href="dashboard" className="text-light">Dashboard</Nav.Link>
            <Nav.Link href="#pricing" className="text-light">Requirements</Nav.Link>
            <Nav.Link href="eventform" className="text-light">Pre-made</Nav.Link>
            <Nav.Link href="content" className="text-light">Directory</Nav.Link>
            <Nav.Link href="customize" className="text-light">Customize</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="contact" className="text-light">Contact Us</Nav.Link>
            <Nav.Link href="settings" className="text-light">Settings</Nav.Link>
            <Nav.Link eventKey={2} href="login" className="text-light">✦ Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;



