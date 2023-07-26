import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function NavbarCom() {
  return (
    <Navbar expand="lg" className="nav2  h-25  ">
      <Container className="">
        <Navbar.Brand href="/" className="pe-5">
          Mama Recipe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center ">
            <Nav.Link href="/" className="px-4 text-dark">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="me-1">
            <Nav.Link
              href="/Login"
              className="me-2 text-center text-white d-flex "
            >
              <FontAwesomeIcon icon={faCircleUser} className="me-2 h-75" />
              <span className="">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
