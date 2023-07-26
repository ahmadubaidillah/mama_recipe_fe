import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import kare from "../asset/images/kare.jpg";

const PopularRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    // dispatch(getFoodById(id));

    getRecipe();
  }, []);

  const getRecipe = async () => {
    try {
      const res = await axios.get("http://localhost:4000/food", {
        withCredentials: true,
      });
      console.log(res);
      setRecipe(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="bg-white w-100 popular-fy me-5 mb-5 mt-5">
      <Row>
        <Col
          md={1}
          sm={1}
          style={{ width: "1px", backgroundColor: "#efc81a" }}
        ></Col>
        <Col md={11}>
          <h1>Popular Recipe</h1>
        </Col>
      </Row>
      <Row className="mt-5 popular me-auto">
        {recipe.slice(0, 6).map((item, i) => (
          <Col sm={12} md={4} className=" me-auto mt-5 mb-3">
            <Link
              to={`/DetailRecipe/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={item.image}
                alt="sandwich"
                className=" new-img"
                style={{ width: "300px", height: "300px" }}
              />
              <p className="top-left fs-5 fw-bold w-50 text-dark">
                {item.name}
              </p>
            </Link>
          </Col>
        ))}
        {/* <Col sm={12} md={4} className=" me-auto">
        <img
            src={recipe[1].image}
            alt="sandwich"
            className="w-75 h-75 new-img"
          />
          <p className="top-left fs-5 w-50">{recipe[1].name}</p>
        </Col>
        <Col sm={12} md={4} className=" me-auto">
          <img
            src={recipe[4].image}
            alt="sandwich"
            className="w-75 h-75 new-img"
          />
          <p className="top-left fs-5 w-50">{recipe[4].name}</p>
        </Col> */}
      </Row>
      {/* <Row className="popular me-auto">
        <Col sm={12} md={4} className="me-auto">
          <img
            src={recipe[2].image}
            alt="sandwich"
            className="w-75 h-75 new-img"
          />
          <p className="top-left fs-5 w-50">{recipe[2].name}</p>
        </Col>
        <Col sm={12} md={4} className="me-auto">
          <img
            src={recipe[3].image}
            alt="sandwich"
            className="w-75 h-75 new-img"
          />
          <p className="top-left fs-5 w-50">{recipe[3].name}</p>
        </Col>
        <Col sm={12} md={4} className="me-auto">
          <img
            src={recipe[5].image}
            alt="sandwich"
            className="w-75 h-75 new-img"
          />
          <p className="top-left fs-5 w-50">{recipe[5].name}</p>
        </Col>
      </Row> */}
    </Container>
  );
};
export default PopularRecipe;
