import React from 'react';
import './navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from './assets/logo_bo_small.png';

const NavigationBar = () => {
    return (
      <div>
        <nav>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="https://www.bo.berlin/" target="_blank">
                  <img src={logo} alt="" width="50px" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Quiz</Nav.Link>
                  <Nav.Link href="#link">Admin</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </div>
    );
  };

export default NavigationBar;