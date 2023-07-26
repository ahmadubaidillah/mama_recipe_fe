import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import sandwich from "../asset/images/4da51338c06dd21688b82eae3bc9dfa6.jpg";
import { useNavigate } from "react-router-dom";

const HomeContent = (props) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/Recipes");
  };

  return (
    <section className="homeContent-1">
      <Container className="text-center">
        <Row className="">
          <Col sm={12} md={6} className="mt-5 pt-5 ">
            <p
              style={{
                fontSize: "72px",
                fontWeight: "500",
                lineHeight: "90px",
                color: "#2E266F",
              }}
            >
              Discover Recipe <br></br>& Delicious Food
            </p>
            <Form className="">
              <Form.Group className="mb-3 mt-3 w-75 mx-auto">
                <Form.Control
                  id="disabledTextInput"
                  placeholder="search restaurant, food"
                  onClick={handleSearch}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12} md={6} className="fs-1 mt-5 ">
            <img src={sandwich} alt="sandwich" className=" home-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContent;
