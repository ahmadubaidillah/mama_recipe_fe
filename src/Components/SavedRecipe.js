import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BombChiken from "../asset/images/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import BananaPancake from "../asset/images/65940ba73f12f048d870dfa487a052df.jpg";

const SavedRecipe = () => {
  return (
    <Container>
      <Row className="w-50">
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto ">
          <a
            href="/Profile"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            My Recipe
          </a>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto fw-semibold">
          <a
            href="/Profile2"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            Saved Recipe
          </a>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto">
          <a
            href="/Profile3"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            Liked Recipe
          </a>
        </Col>
      </Row>
      <hr></hr>
      <Row className="mt-4 mb-5 mx-auto">
        <Col lg={3} md={3} sm={4} xs={6} className="">
          <img src={BombChiken} alt="" className="w-75 h-75 new-img"></img>
          <p className="top-left fs-4 w-50 text-white">Bomb Chiken</p>
        </Col>
        <Col lg={3} md={3} sm={4} xs={6} className="">
          <img src={BananaPancake} alt="" className="w-75 h-75 new-img"></img>
          <p className="top-left fs-4 w-50 text-white">Banana Pancake</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedRecipe;
