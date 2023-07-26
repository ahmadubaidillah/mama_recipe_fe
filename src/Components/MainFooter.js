import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <section
      className="footer bg-warning mt-5"
      style={{ fontFamily: "AirbnbCerealLight" }}
    >
      <Container className="text-center ">
        <Row className="mt-5">
          <Col md={12}>
            <h1 className="fs-1 mt-5">Eat, Cook , Repeat</h1>
          </Col>
          <Col md={12}>
            <p className="fs-5">Share your best recipe by uploading here !</p>
          </Col>
        </Row>
        <Row className="w-75 mx-auto mt-5">
          <Col md={3} style={{ fontSize: "14px" }}>
            Product
          </Col>
          <Col md={3} style={{ fontSize: "14px" }}>
            Company{" "}
          </Col>
          <Col md={3} style={{ fontSize: "14px" }}>
            {" "}
            Learn more{" "}
          </Col>
          <Col md={3} style={{ fontSize: "14px" }}>
            Get in touch{" "}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col></Col>
        </Row>
        <Row className="mt-5">
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};
export default MainNavbar;
