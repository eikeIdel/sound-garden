import React from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "./assets/logo_bo_small.png";
import quiz from "./assets/quiz_icon.png";

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <Navbar bg="lightgreen" expand="lg">
          <Container>
            <Navbar.Brand href="https://www.bo.berlin/" target="_blank">
              <img className="bo-logo" src={logo} alt="Logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Brand href="/">
              <img className="quiz-icon" src={quiz} alt="Quiz" width="60px" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Quiz">Quiz</Nav.Link>
                <Nav.Link href="#link">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default NavigationBar;
